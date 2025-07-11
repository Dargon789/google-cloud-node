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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as instanceserviceModule from '../src';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(require('../protos/protos.json')).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
    let type = root.lookupType(typeName) as protobuf.Type;
    for (const field of fields.slice(0, -1)) {
        type = type.fields[field]?.resolvedType as protobuf.Type;
    }
    return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v1.InstanceServiceClient', () => {
    describe('Common methods', () => {
        it('has apiEndpoint', () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient();
            const apiEndpoint = client.apiEndpoint;
            assert.strictEqual(apiEndpoint, 'chronicle.googleapis.com');
        });

        it('has universeDomain', () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient();
            const universeDomain = client.universeDomain;
            assert.strictEqual(universeDomain, "googleapis.com");
        });

        if (typeof process === 'object' && typeof process.emitWarning === 'function') {
            it('throws DeprecationWarning if static servicePath is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const servicePath = instanceserviceModule.v1.InstanceServiceClient.servicePath;
                assert.strictEqual(servicePath, 'chronicle.googleapis.com');
                assert(stub.called);
                stub.restore();
            });

            it('throws DeprecationWarning if static apiEndpoint is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const apiEndpoint = instanceserviceModule.v1.InstanceServiceClient.apiEndpoint;
                assert.strictEqual(apiEndpoint, 'chronicle.googleapis.com');
                assert(stub.called);
                stub.restore();
            });
        }
        it('sets apiEndpoint according to universe domain camelCase', () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient({universeDomain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'chronicle.example.com');
        });

        it('sets apiEndpoint according to universe domain snakeCase', () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient({universe_domain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'chronicle.example.com');
        });

        if (typeof process === 'object' && 'env' in process) {
            describe('GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', () => {
                it('sets apiEndpoint from environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new instanceserviceModule.v1.InstanceServiceClient();
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'chronicle.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });

                it('value configured in code has priority over environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new instanceserviceModule.v1.InstanceServiceClient({universeDomain: 'configured.example.com'});
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'chronicle.configured.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });
            });
        }
        it('does not allow setting both universeDomain and universe_domain', () => {
            assert.throws(() => { new instanceserviceModule.v1.InstanceServiceClient({universe_domain: 'example.com', universeDomain: 'example.net'}); });
        });

        it('has port', () => {
            const port = instanceserviceModule.v1.InstanceServiceClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.instanceServiceStub, undefined);
            await client.initialize();
            assert(client.instanceServiceStub);
        });

        it('has close method for the initialized client', done => {
            const client = new instanceserviceModule.v1.InstanceServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize().catch(err => {throw err});
            assert(client.instanceServiceStub);
            client.close().then(() => {
                done();
            }).catch(err => {throw err});
        });

        it('has close method for the non-initialized client', done => {
            const client = new instanceserviceModule.v1.InstanceServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.instanceServiceStub, undefined);
            client.close().then(() => {
                done();
            }).catch(err => {throw err});
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new instanceserviceModule.v1.InstanceServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
            const result = await client.getProjectId();
            assert.strictEqual(result, fakeProjectId);
            assert((client.auth.getProjectId as SinonStub).calledWithExactly());
        });

        it('has getProjectId method with callback', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new instanceserviceModule.v1.InstanceServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
            const promise = new Promise((resolve, reject) => {
                client.getProjectId((err?: Error|null, projectId?: string|null) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(projectId);
                    }
                });
            });
            const result = await promise;
            assert.strictEqual(result, fakeProjectId);
        });
    });

    describe('getInstance', () => {
        it('invokes getInstance without error', async () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.chronicle.v1.GetInstanceRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.chronicle.v1.GetInstanceRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.chronicle.v1.Instance()
            );
            client.innerApiCalls.getInstance = stubSimpleCall(expectedResponse);
            const [response] = await client.getInstance(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.getInstance as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getInstance as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getInstance without error using callback', async () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.chronicle.v1.GetInstanceRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.chronicle.v1.GetInstanceRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.chronicle.v1.Instance()
            );
            client.innerApiCalls.getInstance = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getInstance(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.chronicle.v1.IInstance|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.getInstance as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getInstance as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getInstance with error', async () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.chronicle.v1.GetInstanceRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.chronicle.v1.GetInstanceRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1 ?? '' }`;
            const expectedError = new Error('expected');
            client.innerApiCalls.getInstance = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getInstance(request), expectedError);
            const actualRequest = (client.innerApiCalls.getInstance as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getInstance as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getInstance with closed client', async () => {
            const client = new instanceserviceModule.v1.InstanceServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.chronicle.v1.GetInstanceRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.chronicle.v1.GetInstanceRequest', ['name']);
            request.name = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close().catch(err => {throw err});
            await assert.rejects(client.getInstance(request), expectedError);
        });
    });

    describe('Path templates', () => {

        describe('dataAccessLabel', async () => {
            const fakePath = "/rendered/path/dataAccessLabel";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                instance: "instanceValue",
                data_access_label: "dataAccessLabelValue",
            };
            const client = new instanceserviceModule.v1.InstanceServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.dataAccessLabelPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.dataAccessLabelPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('dataAccessLabelPath', () => {
                const result = client.dataAccessLabelPath("projectValue", "locationValue", "instanceValue", "dataAccessLabelValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.dataAccessLabelPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromDataAccessLabelName', () => {
                const result = client.matchProjectFromDataAccessLabelName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.dataAccessLabelPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromDataAccessLabelName', () => {
                const result = client.matchLocationFromDataAccessLabelName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.dataAccessLabelPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchInstanceFromDataAccessLabelName', () => {
                const result = client.matchInstanceFromDataAccessLabelName(fakePath);
                assert.strictEqual(result, "instanceValue");
                assert((client.pathTemplates.dataAccessLabelPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchDataAccessLabelFromDataAccessLabelName', () => {
                const result = client.matchDataAccessLabelFromDataAccessLabelName(fakePath);
                assert.strictEqual(result, "dataAccessLabelValue");
                assert((client.pathTemplates.dataAccessLabelPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('dataAccessScope', async () => {
            const fakePath = "/rendered/path/dataAccessScope";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                instance: "instanceValue",
                data_access_scope: "dataAccessScopeValue",
            };
            const client = new instanceserviceModule.v1.InstanceServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.dataAccessScopePathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.dataAccessScopePathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('dataAccessScopePath', () => {
                const result = client.dataAccessScopePath("projectValue", "locationValue", "instanceValue", "dataAccessScopeValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.dataAccessScopePathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromDataAccessScopeName', () => {
                const result = client.matchProjectFromDataAccessScopeName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.dataAccessScopePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromDataAccessScopeName', () => {
                const result = client.matchLocationFromDataAccessScopeName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.dataAccessScopePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchInstanceFromDataAccessScopeName', () => {
                const result = client.matchInstanceFromDataAccessScopeName(fakePath);
                assert.strictEqual(result, "instanceValue");
                assert((client.pathTemplates.dataAccessScopePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchDataAccessScopeFromDataAccessScopeName', () => {
                const result = client.matchDataAccessScopeFromDataAccessScopeName(fakePath);
                assert.strictEqual(result, "dataAccessScopeValue");
                assert((client.pathTemplates.dataAccessScopePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('instance', async () => {
            const fakePath = "/rendered/path/instance";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                instance: "instanceValue",
            };
            const client = new instanceserviceModule.v1.InstanceServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.instancePathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.instancePathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('instancePath', () => {
                const result = client.instancePath("projectValue", "locationValue", "instanceValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.instancePathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromInstanceName', () => {
                const result = client.matchProjectFromInstanceName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.instancePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromInstanceName', () => {
                const result = client.matchLocationFromInstanceName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.instancePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchInstanceFromInstanceName', () => {
                const result = client.matchInstanceFromInstanceName(fakePath);
                assert.strictEqual(result, "instanceValue");
                assert((client.pathTemplates.instancePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('referenceList', async () => {
            const fakePath = "/rendered/path/referenceList";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                instance: "instanceValue",
                reference_list: "referenceListValue",
            };
            const client = new instanceserviceModule.v1.InstanceServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.referenceListPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.referenceListPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('referenceListPath', () => {
                const result = client.referenceListPath("projectValue", "locationValue", "instanceValue", "referenceListValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.referenceListPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromReferenceListName', () => {
                const result = client.matchProjectFromReferenceListName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.referenceListPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromReferenceListName', () => {
                const result = client.matchLocationFromReferenceListName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.referenceListPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchInstanceFromReferenceListName', () => {
                const result = client.matchInstanceFromReferenceListName(fakePath);
                assert.strictEqual(result, "instanceValue");
                assert((client.pathTemplates.referenceListPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchReferenceListFromReferenceListName', () => {
                const result = client.matchReferenceListFromReferenceListName(fakePath);
                assert.strictEqual(result, "referenceListValue");
                assert((client.pathTemplates.referenceListPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('retrohunt', async () => {
            const fakePath = "/rendered/path/retrohunt";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                instance: "instanceValue",
                rule: "ruleValue",
                retrohunt: "retrohuntValue",
            };
            const client = new instanceserviceModule.v1.InstanceServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.retrohuntPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.retrohuntPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('retrohuntPath', () => {
                const result = client.retrohuntPath("projectValue", "locationValue", "instanceValue", "ruleValue", "retrohuntValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.retrohuntPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromRetrohuntName', () => {
                const result = client.matchProjectFromRetrohuntName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.retrohuntPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromRetrohuntName', () => {
                const result = client.matchLocationFromRetrohuntName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.retrohuntPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchInstanceFromRetrohuntName', () => {
                const result = client.matchInstanceFromRetrohuntName(fakePath);
                assert.strictEqual(result, "instanceValue");
                assert((client.pathTemplates.retrohuntPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchRuleFromRetrohuntName', () => {
                const result = client.matchRuleFromRetrohuntName(fakePath);
                assert.strictEqual(result, "ruleValue");
                assert((client.pathTemplates.retrohuntPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchRetrohuntFromRetrohuntName', () => {
                const result = client.matchRetrohuntFromRetrohuntName(fakePath);
                assert.strictEqual(result, "retrohuntValue");
                assert((client.pathTemplates.retrohuntPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('rule', async () => {
            const fakePath = "/rendered/path/rule";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                instance: "instanceValue",
                rule: "ruleValue",
            };
            const client = new instanceserviceModule.v1.InstanceServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.rulePathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.rulePathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('rulePath', () => {
                const result = client.rulePath("projectValue", "locationValue", "instanceValue", "ruleValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.rulePathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromRuleName', () => {
                const result = client.matchProjectFromRuleName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.rulePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromRuleName', () => {
                const result = client.matchLocationFromRuleName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.rulePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchInstanceFromRuleName', () => {
                const result = client.matchInstanceFromRuleName(fakePath);
                assert.strictEqual(result, "instanceValue");
                assert((client.pathTemplates.rulePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchRuleFromRuleName', () => {
                const result = client.matchRuleFromRuleName(fakePath);
                assert.strictEqual(result, "ruleValue");
                assert((client.pathTemplates.rulePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('ruleDeployment', async () => {
            const fakePath = "/rendered/path/ruleDeployment";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                instance: "instanceValue",
                rule: "ruleValue",
            };
            const client = new instanceserviceModule.v1.InstanceServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.ruleDeploymentPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.ruleDeploymentPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('ruleDeploymentPath', () => {
                const result = client.ruleDeploymentPath("projectValue", "locationValue", "instanceValue", "ruleValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.ruleDeploymentPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromRuleDeploymentName', () => {
                const result = client.matchProjectFromRuleDeploymentName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.ruleDeploymentPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromRuleDeploymentName', () => {
                const result = client.matchLocationFromRuleDeploymentName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.ruleDeploymentPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchInstanceFromRuleDeploymentName', () => {
                const result = client.matchInstanceFromRuleDeploymentName(fakePath);
                assert.strictEqual(result, "instanceValue");
                assert((client.pathTemplates.ruleDeploymentPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchRuleFromRuleDeploymentName', () => {
                const result = client.matchRuleFromRuleDeploymentName(fakePath);
                assert.strictEqual(result, "ruleValue");
                assert((client.pathTemplates.ruleDeploymentPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('watchlist', async () => {
            const fakePath = "/rendered/path/watchlist";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                instance: "instanceValue",
                watchlist: "watchlistValue",
            };
            const client = new instanceserviceModule.v1.InstanceServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.watchlistPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.watchlistPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('watchlistPath', () => {
                const result = client.watchlistPath("projectValue", "locationValue", "instanceValue", "watchlistValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.watchlistPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromWatchlistName', () => {
                const result = client.matchProjectFromWatchlistName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.watchlistPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromWatchlistName', () => {
                const result = client.matchLocationFromWatchlistName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.watchlistPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchInstanceFromWatchlistName', () => {
                const result = client.matchInstanceFromWatchlistName(fakePath);
                assert.strictEqual(result, "instanceValue");
                assert((client.pathTemplates.watchlistPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchWatchlistFromWatchlistName', () => {
                const result = client.matchWatchlistFromWatchlistName(fakePath);
                assert.strictEqual(result, "watchlistValue");
                assert((client.pathTemplates.watchlistPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
