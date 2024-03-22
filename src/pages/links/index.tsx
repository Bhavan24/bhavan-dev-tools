import { Button, Divider, Select, SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

enum Environments {
    DEVELOP = 'develop',
    DEV = 'dev',
    QA = 'qa',
    PRE_PROD = 'pre-prod',
    PROD = 'prod',
}

const ENVIRONMENTS = [
    Environments.DEVELOP,
    Environments.DEV,
    Environments.QA,
    Environments.PRE_PROD,
    Environments.PROD,
];

const getProjectsFromLocalStorage = () => {
    try {
        const projects = localStorage.getItem('projects');
        if (projects) return JSON.parse(projects);
        return [];
    } catch (error) {
        return [];
    }
};

const ExternalLink = ({ link, text }: any) => {
    return (
        <Button component="a" href={link} target="_blank" variant="outline" leftIcon={<FiExternalLink />}>
            {text}
        </Button>
    );
};

const Links = () => {
    const [kayaValue, setKayaValue] = useState<string | null>(Environments.DEVELOP);
    const appValue = kayaValue === Environments.PROD ? 'app' : kayaValue;
    const KAYA_ADMIN_URL = `https://admin-portal-web.${appValue}.kayatech.com`;
    const KAYA_CORE_WEB_URL = `https://${appValue}.kayatech.com`;
    const KAYA_TEST_CORE_WEB_URL = `https://test-web.${appValue}.kayatech.com`;
    const KAY_APOLLO_URL = `https://apollo-gateway.${appValue}.kayatech.com/graphql`;
    const KEYCLOAK_URL = `https://idp.${appValue}.kayatech.com/auth`;
    const BERNIE_URL = `https://bernie.${appValue}.kayatech.com`;
    const PROJECTS = getProjectsFromLocalStorage();

    const [projects, setProjects] = useState<string[]>(PROJECTS);
    const [gcpProject, setGCPProject] = useState<string>(PROJECTS[0]);
    const GCP_BASE_URL = `https://console.cloud.google.com/welcome?project=${gcpProject}&supportedpurview=project`;
    const GCP_STORAGE_URL = `https://console.cloud.google.com/storage/browser?referrer=search&project=${gcpProject}&supportedpurview=project`;
    const GCP_WORKLOADS_URL = `https://console.cloud.google.com/kubernetes/workload/overview?project=${gcpProject}&supportedpurview=project`;
    const GCP_BUILDS_URL = `https://console.cloud.google.com/cloud-build/builds?project=${gcpProject}&supportedpurview=project`;
    const GCP_ARTIFACTS_URL = `https://console.cloud.google.com/artifacts?referrer=search&project=${gcpProject}&supportedpurview=project`;
    const GCP_SQL_URL = `https://console.cloud.google.com/sql/instances?project=${gcpProject}&supportedpurview=project`;
    const GCP_CDN_URL = `https://console.cloud.google.com/net-services/cdn/list?project=${gcpProject}&supportedpurview=project`;
    const GCP_IAM_URL = `https://console.cloud.google.com/iam-admin/iam?project=${gcpProject}&supportedpurview=project`;
    const GCP_CF_URL = `https://console.cloud.google.com/functions/list?referrer=search&project=${gcpProject}&supportedpurview=project`;
    const GCP_CR_URL = `https://console.cloud.google.com/run?project=${gcpProject}&supportedpurview=project`;
    const GCP_FB_URL = `https://console.firebase.google.com/project/${gcpProject}/overview`;

    return (
        <div style={{ margin: '10px' }}>
            <Divider my="md" size="md" label="GCP" labelPosition="center" />
            <Select
                label="Select GCP Project"
                searchable
                onSearchChange={setGCPProject}
                searchValue={gcpProject}
                nothingFound="No options"
                placeholder="Pick one"
                data={projects}
                creatable
                getCreateLabel={query => `+ Create ${query}`}
                onCreate={query => {
                    setProjects(current => [...current, query]);
                    return query;
                }}
            />
            <SimpleGrid cols={2} my={10}>
                <ExternalLink link={GCP_STORAGE_URL} text={'Cloud Storage'} />
                <ExternalLink link={GCP_WORKLOADS_URL} text={'Workloads'} />
                <ExternalLink link={GCP_BUILDS_URL} text={'Cloud Build'} />
                <ExternalLink link={GCP_ARTIFACTS_URL} text={'Artifacts'} />
                <ExternalLink link={GCP_SQL_URL} text={'Cloud SQL'} />
                <ExternalLink link={GCP_CDN_URL} text={'Cloud CDN'} />
                <ExternalLink link={GCP_IAM_URL} text={'GCP IAM'} />
                <ExternalLink link={GCP_CF_URL} text={'Cloud Functions'} />
                <ExternalLink link={GCP_CR_URL} text={'Cloud Run'} />
                <ExternalLink link={GCP_FB_URL} text={'Firebase'} />
                <ExternalLink link={GCP_BASE_URL} text={'Welcome Page'} />
            </SimpleGrid>
            <Divider my="md" size="md" label="KAYA" labelPosition="center" />
            <Select
                label="Select Environment"
                onChange={setKayaValue}
                value={kayaValue}
                nothingFound="No options"
                placeholder="Pick one"
                data={ENVIRONMENTS}
            />
            <SimpleGrid cols={2} my={10}>
                <ExternalLink link={KAYA_ADMIN_URL} text={'Kaya Admin'} />
                <ExternalLink link={KAYA_CORE_WEB_URL} text={'Kaya Core Web'} />
                <ExternalLink link={KAYA_TEST_CORE_WEB_URL} text={'Kaya Test Web'} />
                <ExternalLink link={KAY_APOLLO_URL} text={'Kaya Apollo'} />
                <ExternalLink link={KEYCLOAK_URL} text={'Keycloak'} />
                <ExternalLink link={BERNIE_URL} text={'Bernie'} />
            </SimpleGrid>
        </div>
    );
};

export { Links };
