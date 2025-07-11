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



'use strict';

function main(parent) {
  // [START networkservices_v1_generated_DepService_ListAuthzExtensions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location from which the `AuthzExtension`
   *  resources are listed. These values are specified in the following format:
   *  `projects/{project}/locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Requested page size. The server might return fewer items than
   *  requested. If unspecified, the server picks an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  Optional. A token identifying a page of results that the server returns.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Filtering results.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Hint about how to order the results.
   */
  // const orderBy = 'abc123'

  // Imports the Networkservices library
  const {DepServiceClient} = require('@google-cloud/networkservices').v1;

  // Instantiates a client
  const networkservicesClient = new DepServiceClient();

  async function callListAuthzExtensions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = networkservicesClient.listAuthzExtensionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListAuthzExtensions();
  // [END networkservices_v1_generated_DepService_ListAuthzExtensions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
