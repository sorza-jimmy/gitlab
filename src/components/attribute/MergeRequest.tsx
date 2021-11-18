import React, { useState } from 'react';
import { ExternalLink } from '../ExternalLink';
import { MrState } from '../MrState';
import MergeRequestBranch from './MergeRequestBranch';

export type MergeRequestProps = {
  record: Aha.RecordUnion;
  mr: IExtensionFieldMergeRequest;
};

export const MergeRequest = ({ record, mr }: MergeRequestProps) => {
  return (
    <aha-flex direction="column">
      <MergeRequestBranch mr={mr} />
      <aha-flex align-items="center" justify-content="space-between" gap="5px">
        <span>
          <ExternalLink href={mr?.webUrl ?? ''}>{mr?.title ?? ''}</ExternalLink>
        </span>
        <MrState mr={mr} />
      </aha-flex>
    </aha-flex>
  );
};
