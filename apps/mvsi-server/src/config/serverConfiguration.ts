export interface ServerConfiguration {
  gcm: {
    enabled: null;

    project_number: null;
  };

  gpgs: {
    google_play_client_id: null;
  };

  apns: { enabled: boolean | null; environment: null; sha1: null };

  server_side_code_deploy: {
    sha: string; // sha-1
    instance: string;
  };

  realtime: {
    enabled: boolean;
    "default-cluster": string;
    servers: {
      [clusterName: string]: { [instanceInCluster: string]: { ws: string; wss: string; udp: string } };
    };
  };
  auth: {
    override_client_restrictions: boolean;
  };
}
const serverConfiguration: ServerConfiguration = {
  gcm: {
    enabled: null,
    project_number: null,
  },
  gpgs: {
    google_play_client_id: null,
  },
  apns: {
    enabled: null,
    environment: null,
    sha1: null,
  },
  server_side_code_deploy: {
    sha: "5a98f8bc35424a1bcfaab95d51f8ef40afb83c9c",
    instance: "a5bc65aa-b129-4f8c-8fc9-b7d20a392463",
  },
  realtime: {
    enabled: true,
    "default-cluster": "ec2-us-east-1-dokken",
    servers: {
      "ec2-us-east-1-dokken": {
        "dokken-realtime-3/2": {
          ws: "ws://54.144.160.165:8102",
          wss: "wss://us-east-1-dokken-realtime-3.wbagora.com:9102",
          udp: "0.0.0.0:0",
        },
        "dokken-realtime-5/1": {
          ws: "ws://52.72.177.178:8101",
          wss: "wss://us-east-1-dokken-realtime-5.wbagora.com:9101",
          udp: "0.0.0.0:0",
        },
        "dokken-realtime-4/1": {
          ws: "ws://35.170.47.9:8101",
          wss: "wss://us-east-1-dokken-realtime-4.wbagora.com:9101",
          udp: "0.0.0.0:0",
        },
        "dokken-realtime-1/2": {
          ws: "ws://52.73.198.117:8102",
          wss: "wss://us-east-1-dokken-realtime-1.wbagora.com:9102",
          udp: "0.0.0.0:0",
        },
        "dokken-realtime-2/1": {
          ws: "ws://54.91.137.166:8101",
          wss: "wss://us-east-1-dokken-realtime-2.wbagora.com:9101",
          udp: "0.0.0.0:0",
        },
        "dokken-realtime-2/2": {
          ws: "ws://54.91.137.166:8102",
          wss: "wss://us-east-1-dokken-realtime-2.wbagora.com:9102",
          udp: "0.0.0.0:0",
        },
        "dokken-realtime-5/2": {
          ws: "ws://52.72.177.178:8102",
          wss: "wss://us-east-1-dokken-realtime-5.wbagora.com:9102",
          udp: "0.0.0.0:0",
        },
        "dokken-realtime-1/1": {
          ws: "ws://52.73.198.117:8101",
          wss: "wss://us-east-1-dokken-realtime-1.wbagora.com:9101",
          udp: "0.0.0.0:0",
        },
        "dokken-realtime-3/1": {
          ws: "ws://54.144.160.165:8101",
          wss: "wss://us-east-1-dokken-realtime-3.wbagora.com:9101",
          udp: "0.0.0.0:0",
        },
        "dokken-realtime-4/2": {
          ws: "ws://35.170.47.9:8102",
          wss: "wss://us-east-1-dokken-realtime-4.wbagora.com:9102",
          udp: "0.0.0.0:0",
        },
      },
    },
  },
  auth: {
    override_client_restrictions: false,
  },
};
export default serverConfiguration;
