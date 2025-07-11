// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import {FlexTemplatesServiceClient, JobsV1Beta3Client, MessagesV1Beta3Client, MetricsV1Beta3Client, SnapshotsV1Beta3Client, TemplatesServiceClient} from '@google-cloud/dataflow';

// check that the client class type name can be used
function doStuffWithFlexTemplatesServiceClient(client: FlexTemplatesServiceClient) {
  client.close();
}
function doStuffWithJobsV1Beta3Client(client: JobsV1Beta3Client) {
  client.close();
}
function doStuffWithMessagesV1Beta3Client(client: MessagesV1Beta3Client) {
  client.close();
}
function doStuffWithMetricsV1Beta3Client(client: MetricsV1Beta3Client) {
  client.close();
}
function doStuffWithSnapshotsV1Beta3Client(client: SnapshotsV1Beta3Client) {
  client.close();
}
function doStuffWithTemplatesServiceClient(client: TemplatesServiceClient) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const flexTemplatesServiceClient = new FlexTemplatesServiceClient();
  doStuffWithFlexTemplatesServiceClient(flexTemplatesServiceClient);
  // check that the client instance can be created
  const jobsV1Beta3Client = new JobsV1Beta3Client();
  doStuffWithJobsV1Beta3Client(jobsV1Beta3Client);
  // check that the client instance can be created
  const messagesV1Beta3Client = new MessagesV1Beta3Client();
  doStuffWithMessagesV1Beta3Client(messagesV1Beta3Client);
  // check that the client instance can be created
  const metricsV1Beta3Client = new MetricsV1Beta3Client();
  doStuffWithMetricsV1Beta3Client(metricsV1Beta3Client);
  // check that the client instance can be created
  const snapshotsV1Beta3Client = new SnapshotsV1Beta3Client();
  doStuffWithSnapshotsV1Beta3Client(snapshotsV1Beta3Client);
  // check that the client instance can be created
  const templatesServiceClient = new TemplatesServiceClient();
  doStuffWithTemplatesServiceClient(templatesServiceClient);
}

main();
