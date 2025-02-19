import React, { useEffect } from 'react';

import {
  Form,
  Stack,
  StackItem,
  TextInput,
  Title,
} from '@patternfly/react-core';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import './search-page.scss';
import AppLink from '../../Components/AppLink';

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
const SearchPage = () => {
  useEffect(() => {
    insights?.chrome?.appAction?.('sample-page');
  }, []);

  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderTitle title="Search!" />
        <p> Search! </p>
      </PageHeader>
      <Main>
        <Stack hasGutter>
          <StackItem>
            <Title headingLevel="h2" size="3xl">
              Search for anything
            </Title>
            <Form>
              <TextInput />
            </Form>
          </StackItem>
          <StackItem>
            <Stack hasGutter>
              <StackItem>
                <Title headingLevel="h2" size="3xl">
                  Handy-Dandy Developer Links{' '}
                </Title>
              </StackItem>
              <StackItem>
                <AppLink to="package/quarkus-1.2.3"> A Package Page </AppLink>
              </StackItem>
              <StackItem>
                <AppLink to="vuln/CVE-8675309"> A Vuln Page </AppLink>
              </StackItem>
            </Stack>
          </StackItem>
        </Stack>
      </Main>
    </React.Fragment>
  );
};

export default SearchPage;
