import { Anchor, Select, SimpleGrid } from '@mantine/core';
import { useState } from 'react';

enum Environments {
    DEV = 'dev',
    QA = 'qa',
    PRE_PROD = 'pre-prod',
    PROD = 'app',
}

const ENVIRONMENTS = [Environments.DEV, Environments.QA, Environments.PRE_PROD, Environments.PROD];

const Links = () => {
    const [value, setValue] = useState<any>(Environments.DEV);

    const GcpBaseURL = `https://console.cloud.google.com/welcome?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GcpStorageURL = `https://console.cloud.google.com/storage/browser?referrer=search&project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GcpWorkloadsURL = `https://console.cloud.google.com/kubernetes/workload/overview?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GcpBuildsURL = `https://console.cloud.google.com/cloud-build/builds?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GcpArtifactsURL = `https://console.cloud.google.com/artifacts?referrer=search&project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GcpSqlURL = `https://console.cloud.google.com/sql/instances?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GcpCdnURL = `https://console.cloud.google.com/net-services/cdn/list?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GcpIamURL = `https://console.cloud.google.com/iam-admin/iam?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const KayaAdminURL = `https://admin-portal-web.${value}.kayatech.com`;
    const KayaCoreWebURL = `https://${value}.kayatech.com`;
    const KayaTestCoreWebURL = `https://test-web.${value}.kayatech.com`;
    const KayApolloURL = `https://apollo-gateway.${value}.kayatech.com/graphql`;
    const KeycloakURL = `https://idp.${value}.kayatech.com/auth`;

    return (
        <div style={{ margin: '10px' }}>
            <Select
                label="Select Environment"
                onChange={setValue}
                value={value}
                nothingFound="No options"
                placeholder="Pick one"
                data={ENVIRONMENTS}
            />
            <SimpleGrid cols={2} my={10}>
                <Anchor href={GcpBaseURL} target="_blank">
                    Gcp Base URL
                </Anchor>
                <Anchor href={GcpStorageURL} target="_blank">
                    Gcp Storage URL
                </Anchor>
                <Anchor href={GcpWorkloadsURL} target="_blank">
                    Gcp Base URL
                </Anchor>
                <Anchor href={GcpBuildsURL} target="_blank">
                    Gcp Builds Url
                </Anchor>
                <Anchor href={GcpArtifactsURL} target="_blank">
                    Gcp Artifacts Url
                </Anchor>
                <Anchor href={GcpSqlURL} target="_blank">
                    Gcp SQL URL
                </Anchor>
                <Anchor href={GcpCdnURL} target="_blank">
                    Gcp CDN URL
                </Anchor>
                <Anchor href={GcpIamURL} target="_blank">
                    Gcp IAM URL
                </Anchor>
                <Anchor href={KayaAdminURL} target="_blank">
                    Kaya Admin URL
                </Anchor>
                <Anchor href={KayaCoreWebURL} target="_blank">
                    Kaya Core Web URL
                </Anchor>
                <Anchor href={KayaTestCoreWebURL} target="_blank">
                    Kaya Test Core Web URL
                </Anchor>
                <Anchor href={KayApolloURL} target="_blank">
                    Kaya Apollo URL
                </Anchor>
                <Anchor href={KeycloakURL} target="_blank">
                    Keycloak URL
                </Anchor>
            </SimpleGrid>
        </div>
    );
};

export { Links };
