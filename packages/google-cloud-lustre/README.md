[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Managed Lustre API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-lustre)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/lustre.svg)](https://www.npmjs.org/package/@google-cloud/lustre)




Google Cloud Managed Lustre API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-lustre/CHANGELOG.md).

* [Google Cloud Managed Lustre API Node.js Client API Reference][client-docs]
* [Google Cloud Managed Lustre API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-lustre](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-lustre)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Cloud Managed Lustre API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/lustre
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The project and location for which to retrieve a list of
 *  instances, in the format `projects/{projectId}/locations/{location}`.
 *  To retrieve instance information for all locations, use "-" as the value
 *  of `{location}`.
 */
// const parent = 'abc123'
/**
 *  Optional. Requested page size. Server might return fewer items than
 *  requested. If unspecified, the server will pick an appropriate default.
 */
// const pageSize = 1234
/**
 *  Optional. A token identifying a page of results the server should return.
 */
// const pageToken = 'abc123'
/**
 *  Optional. Filtering results.
 */
// const filter = 'abc123'
/**
 *  Optional. Desired order of results.
 */
// const orderBy = 'abc123'

// Imports the Lustre library
const {LustreClient} = require('@google-cloud/lustre').v1;

// Instantiates a client
const lustreClient = new LustreClient();

async function callListInstances() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = lustreClient.listInstancesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListInstances();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-lustre/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Lustre.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-lustre/samples/generated/v1/lustre.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-lustre/samples/generated/v1/lustre.create_instance.js,packages/google-cloud-lustre/samples/README.md) |
| Lustre.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-lustre/samples/generated/v1/lustre.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-lustre/samples/generated/v1/lustre.delete_instance.js,packages/google-cloud-lustre/samples/README.md) |
| Lustre.export_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-lustre/samples/generated/v1/lustre.export_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-lustre/samples/generated/v1/lustre.export_data.js,packages/google-cloud-lustre/samples/README.md) |
| Lustre.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-lustre/samples/generated/v1/lustre.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-lustre/samples/generated/v1/lustre.get_instance.js,packages/google-cloud-lustre/samples/README.md) |
| Lustre.import_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-lustre/samples/generated/v1/lustre.import_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-lustre/samples/generated/v1/lustre.import_data.js,packages/google-cloud-lustre/samples/README.md) |
| Lustre.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-lustre/samples/generated/v1/lustre.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-lustre/samples/generated/v1/lustre.list_instances.js,packages/google-cloud-lustre/samples/README.md) |
| Lustre.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-lustre/samples/generated/v1/lustre.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-lustre/samples/generated/v1/lustre.update_instance.js,packages/google-cloud-lustre/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-lustre/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-lustre/samples/quickstart.js,packages/google-cloud-lustre/samples/README.md) |



The [Google Cloud Managed Lustre API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/lustre@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/lustre/latest
[product-docs]: https://cloud.google.com/managed-lustre/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=lustre.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
