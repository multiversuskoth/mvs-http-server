import { useForm, useStore } from "@tanstack/react-form";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import * as React from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { addAnnoucement, editAnnouncement, getAnnouncement } from "@/data/admin/announcements-data";
import { authAdminMiddleware } from "@/routes/admin/accounts";
import { BuildFormDataForUploadUrl, getUploadUrlFn } from "@/utils/upload-utils";

import "./announcements-fonts.css";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "@/components/file-upload";
import { DateInput } from "@/components/ui/date-input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const AddAnnouncementFormSchema = z.object({
  id: z.string(),
  title: z.string().min(5, "Title must be at least 5 characters.").max(32, "Title must be at most 32 characters."),
  description: z.string().min(5, "Description must be at least 5 characters.").max(500, "Description must be at most 500 characters."),
  thumbnailTitle: z.string().min(5, "ThumnailTitle must be at least 5 characters.").max(30, "ThumnailTitle must be at most 30 characters."),
  start_at: z.date(),
  end_at: z.union([z.date(), z.undefined()]),
  priority: z.number(),
  featured: z.boolean(),
  display_in_modal: z.boolean(),
  image: z.array(z.instanceof(File), "Invalid file"),
});

export const getAnnouncementsFn = createServerFn({ method: "GET" })
  .middleware([authAdminMiddleware])
  .inputValidator((data: { id: string }) => data)
  .handler(async (data) => {
    return await getAnnouncement(data.data.id);
  });

export const Route = createFileRoute("/admin/announcements/$announcementId")({
  loader: async (context) => {
    if (context.params.announcementId === "new") {
      return null;
    }
    return await getAnnouncementsFn({
      data: { id: context.params.announcementId },
    });
  },
  component: AddAnnouncementDialog,
});

const AddAnnouncementFormSchemaForFunction = AddAnnouncementFormSchema.extend({
  image: z.string().optional(),
  key: z.string(),
});

const EditAnnouncementFormSchema = AddAnnouncementFormSchema.extend({
  image: z.undefined(),
});

export type AddAnnouncementFormData = z.infer<typeof AddAnnouncementFormSchemaForFunction>;

export type EditAnnouncementFormData = z.infer<typeof EditAnnouncementFormSchema>;

export const ConfirmAddAnnouncementUploadFn = createServerFn({ method: "POST" })
  .middleware([authAdminMiddleware])
  .inputValidator(AddAnnouncementFormSchemaForFunction)
  .handler(async (context) => {
    await addAnnoucement(context.data);
  });

export const EditAnnouncementFn = createServerFn({ method: "POST" })
  .middleware([authAdminMiddleware])
  .inputValidator(EditAnnouncementFormSchema)
  .handler(async (context) => {
    await editAnnouncement(context.data);
  });

function AddAnnouncementDialog() {
  const getUrlFn = useServerFn(getUploadUrlFn);
  const confirmAnnouncementUploadFn = useServerFn(ConfirmAddAnnouncementUploadFn);
  const editAnnouncementUseFn = useServerFn(EditAnnouncementFn);
  const navigate = Route.useNavigate();
  const router = useRouter();

  const existing = Route.useLoaderData();

  const form = useForm({
    defaultValues: {
      id: existing?.id || "new",
      title: existing?.title || "",
      description: existing?.description || "",
      thumbnailTitle: existing?.thumbnailTitle || "",
      start_at: existing?.start_at || new Date(),
      end_at: existing?.end_at || (undefined as Date | undefined),
      priority: existing?.priority || 1000,
      featured: existing?.featured || false,
      display_in_modal: existing?.display_in_modal ?? true,
      image: undefined as File[] | undefined,
    },
    validators: {
      onSubmit: ({ formApi }) => {
        if (existing) {
          return formApi.parseValuesWithSchema(EditAnnouncementFormSchema);
        }
        return formApi.parseValuesWithSchema(AddAnnouncementFormSchema);
      },
    },
    onSubmit: async ({ value }) => {
      if (existing) {
        await editAnnouncementUseFn({
          data: { ...value, image: undefined, id: existing.id },
        });
      } else {
        const result = await getUrlFn({ data: value.image![0].name });
        if (!result.error && result.value) {
          try {
            const form = BuildFormDataForUploadUrl(result.value.fields);
            form.append("file", value.image![0], value.image![0].name);
            const response = await fetch(result.value.url, {
              method: "POST",
              body: form,
            });
            if (response.ok) {
              await confirmAnnouncementUploadFn({
                data: {
                  ...value,
                  key: result.value.fields.key,
                  image: undefined,
                },
              });
            }
          } catch (e) {}
        }
      }
      router.invalidate({ filter: (match) => match.routeId === "/admin/announcements/" });
      await navigate({ to: "/admin/announcements" });
      router.invalidate({ filter: (match) => match.routeId === Route.fullPath });
    },
  });

  const title = useStore(form.store, (state) => state.values.title);
  const description = useStore(form.store, (state) => state.values.description);
  const thumbnailTitle = useStore(form.store, (state) => state.values.thumbnailTitle);
  const [preview, setPreview] = React.useState<string>("");

  React.useEffect(() => {
    if (existing?.image) {
      setPreview(existing.image);
    }
  }, [existing]);

  return (
    <Card>
      <form
        id="add-announcement-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <CardHeader className="h-12">
          <CardTitle>{!existing ? "Add" : "Edit"} Announcement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <FieldGroup className="w-auto flex-1 gap-4">
              <form.Field
                name="title"
                children={(field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Welcome to MVSI!"
                        autoComplete="off"
                      />
                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  );
                }}
              />
              <form.Field
                name="description"
                children={(field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                      <InputGroup>
                        <InputGroupTextarea
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Patch Notes:&#10;Nerf Banana Gore"
                          rows={6}
                          maxLength={500}
                          className="min-h-24 resize-none"
                          aria-invalid={isInvalid}
                        />
                        <InputGroupAddon align="block-end">
                          <InputGroupText className="tabular-nums">{field.state.value.length}/500 characters</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  );
                }}
              />
              <FieldGroup className="flex-row">
                <form.Field
                  name="thumbnailTitle"
                  children={(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field orientation="verticalSimple" className="flex-1" data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Thumbnail Title</FieldLabel>
                        <Input
                          maxLength={30}
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="MVSI!"
                          autoComplete="off"
                        />
                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                      </Field>
                    );
                  }}
                />
                <form.Field
                  name="priority"
                  children={(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field orientation="verticalSimple" className="flex-[0.25]" data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Priority</FieldLabel>
                        <Input
                          id={field.name}
                          type="number"
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(Number(e.target.value))}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                      </Field>
                    );
                  }}
                />
              </FieldGroup>
              <FieldGroup className="flex-row">
                <form.Field
                  name="start_at"
                  children={(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Start Date</FieldLabel>
                        <DateInput currentValue={field.state.value} onValueChange={(date) => field.handleChange(date)}></DateInput>
                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                      </Field>
                    );
                  }}
                />
                <form.Field
                  name="end_at"
                  children={(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>End Date</FieldLabel>
                        <DateInput currentValue={field.state.value} onValueChange={(date) => field.handleChange(date)}></DateInput>
                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                      </Field>
                    );
                  }}
                />
              </FieldGroup>
              <Separator />
              <FieldGroup className="flex-row">
                <form.Field
                  name="featured"
                  children={(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field orientation="horizontal" data-invalid={isInvalid}>
                        <FieldContent>
                          <FieldLabel htmlFor="form-tanstack-switch-featured">Featured</FieldLabel>
                          {isInvalid && <FieldError errors={field.state.meta.errors} />}
                        </FieldContent>
                        <Switch
                          id="form-tanstack-switch-featured"
                          name={field.name}
                          checked={field.state.value}
                          onCheckedChange={field.handleChange}
                          aria-invalid={isInvalid}
                        />
                      </Field>
                    );
                  }}
                />
                <form.Field
                  name="display_in_modal"
                  children={(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field orientation="horizontal" data-invalid={isInvalid}>
                        <FieldContent>
                          <FieldLabel htmlFor="form-tanstack-switch-modal">Display in Modal</FieldLabel>
                          {isInvalid && <FieldError errors={field.state.meta.errors} />}
                        </FieldContent>
                        <Switch
                          id="form-tanstack-switch-modal"
                          name={field.name}
                          checked={field.state.value}
                          onCheckedChange={field.handleChange}
                          aria-invalid={isInvalid}
                        />
                      </Field>
                    );
                  }}
                />
              </FieldGroup>
              {!existing && (
                <form.Field
                  name="image"
                  children={(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field orientation="vertical" data-invalid={isInvalid}>
                        <FieldContent>{isInvalid && <FieldError errors={field.state.meta.errors} />}</FieldContent>
                        <Dropzone
                          accept={{
                            "image/jpeg": [".jpeg"],
                            "image/png": [".png"],
                          }}
                          maxFiles={1}
                          onDrop={(e) => {
                            setPreview(URL.createObjectURL(e[0]));
                            field.handleChange(e);
                          }}
                          maxSize={10 * 1024 * 1024}
                          src={field.state.value}
                        >
                          <DropzoneEmptyState />
                          <DropzoneContent />
                        </Dropzone>
                      </Field>
                    );
                  }}
                />
              )}
            </FieldGroup>
            <div className="flex-1/3 flex items-center justify-center p-8">
              <div
                style={{
                  backgroundImage: `url('${preview}')`,
                  backgroundSize: "100% 100%",
                }}
                className="bg-center bg-no-repeat w-full border-2 border-gray-100 rounded-2xl overflow-hidden"
              >
                <div className="flex-1/3 flex items-center justify-center">
                  <div className="aspect-video w-full border-2 border-gray-100 rounded-2xl overflow-hidden relative">
                    <div style={{ containerType: "inline-size" }} className="absolute h-full w-full pt-1.5">
                      <div className="flex flex-col h-full justify-end">
                        <div
                          className="pl-9"
                          style={{
                            maxWidth: "22cqi",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "5.2cqi",
                              textShadow: "rgba(1, 1, 1, 0.93) 0.5cqi 0.4cqi 0.1cqi",
                              lineHeight: "5.6cqi",
                            }}
                            className="font-announcement-title"
                          >
                            {title ? title : "Title"}
                          </div>
                          <div
                            className="font-announcement-description p-1 "
                            style={{
                              fontSize: "1.3cqi",
                              lineHeight: "1.5cqi",
                              marginBottom: "1.5cqi",
                              backgroundColor: "rgb(1 1 1 / 46%)",
                              width: "max-content",
                              minWidth: "100%",
                              maxWidth: "38.9cqi",
                            }}
                          >
                            <div>{description ? description : "Description"}</div>
                          </div>
                        </div>

                        <div className="justify-center w-full flex" style={{ height: "16cqi" }}>
                          <div
                            className="flex items-end bg-no-repeat bg-center"
                            style={{
                              backgroundSize: "100% 100%",
                              backgroundImage: `url('${preview}')`,
                              width: "18cqi",
                              height: "9.5cqi",
                              border: "4px solid #ffff00",
                            }}
                          >
                            <div
                              className="text-center w-full font-announcement-description"
                              style={{
                                backgroundColor: "rgb(1 1 1 / 49%)",
                                fontSize: " 1.5cqi",
                              }}
                            >
                              {thumbnailTitle}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Field className="mt-5" orientation="horizontal">
            <Button type="submit" form="add-announcement-form">
              {!existing ? "Create" : "Save"}
            </Button>
          </Field>
        </CardContent>
      </form>
    </Card>
  );
}
