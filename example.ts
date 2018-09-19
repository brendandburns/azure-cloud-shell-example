import * as http from 'http';
import * as cloudshell from 'azure-cloud-shell';

const requestHandler = (req, res) => {
  res.end('Hello Cloud Shell!');
}

const server = http.createServer(requestHandler);

// If in cloud shell this adds the tunnel, otherwise noop
cloudshell.AzureCloudShell.initAzureCloudShellTunnel(server);

server.listen(8002, (err) => {
  if (err) {
    return console.log(`Error! ${err}`);
  }
  console.log('Server is running');
});
