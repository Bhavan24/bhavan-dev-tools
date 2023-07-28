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

    const GCP_BASE_URL = `https://console.cloud.google.com/welcome?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GCP_STORAGE_URL = `https://console.cloud.google.com/storage/browser?referrer=search&project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GCP_WORKLOADS_URL = `https://console.cloud.google.com/kubernetes/workload/overview?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GCP_BUILDS_URL = `https://console.cloud.google.com/cloud-build/builds?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GCP_ARTIFACTS_URL = `https://console.cloud.google.com/artifacts?referrer=search&project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GCP_SQL_URL = `https://console.cloud.google.com/sql/instances?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GCP_CDN_URL = `https://console.cloud.google.com/net-services/cdn/list?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GCP_IAM_URL = `https://console.cloud.google.com/iam-admin/iam?project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const GCP_CF_URL = `https://console.cloud.google.com/functions/list?referrer=search&project=kaya-workloads-${value}-389715&supportedpurview=project`;
    const KAYA_ADMIN_URL = `https://admin-portal-web.${value}.kayatech.com`;
    const KAYA_CORE_WEB_URL = `https://${value}.kayatech.com`;
    const KAYA_TEST_CORE_WEB_URL = `https://test-web.${value}.kayatech.com`;
    const KAY_APOLLO_URL = `https://apollo-gateway.${value}.kayatech.com/graphql`;
    const KEYCLOAK_URL = `https://idp.${value}.kayatech.com/auth`;

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
                <Anchor href={GCP_BASE_URL} target="_blank">
                    Base URL
                </Anchor>
                <Anchor href={GCP_STORAGE_URL} target="_blank">
                    Storage URL
                </Anchor>
                <Anchor href={GCP_WORKLOADS_URL} target="_blank">
                    Workloads URL
                </Anchor>
                <Anchor href={GCP_BUILDS_URL} target="_blank">
                    Builds Url
                </Anchor>
                <Anchor href={GCP_ARTIFACTS_URL} target="_blank">
                    Artifacts Url
                </Anchor>
                <Anchor href={GCP_SQL_URL} target="_blank">
                    SQL URL
                </Anchor>
                <Anchor href={GCP_CDN_URL} target="_blank">
                    CDN URL
                </Anchor>
                <Anchor href={GCP_IAM_URL} target="_blank">
                    IAM URL
                </Anchor>
                <Anchor href={GCP_CF_URL} target="_blank">
                    Cloud Function URL
                </Anchor>
                <Anchor href={KAYA_ADMIN_URL} target="_blank">
                    Kaya Admin URL
                </Anchor>
                <Anchor href={KAYA_CORE_WEB_URL} target="_blank">
                    Kaya Core Web URL
                </Anchor>
                <Anchor href={KAYA_TEST_CORE_WEB_URL} target="_blank">
                    Kaya Test Core Web URL
                </Anchor>
                <Anchor href={KAY_APOLLO_URL} target="_blank">
                    Kaya Apollo URL
                </Anchor>
                <Anchor href={KEYCLOAK_URL} target="_blank">
                    Kaya Keycloak URL
                </Anchor>
            </SimpleGrid>
        </div>
    );
};

export { Links };
