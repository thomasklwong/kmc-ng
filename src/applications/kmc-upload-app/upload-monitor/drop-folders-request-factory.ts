import { KalturaDetachedResponseProfile } from 'kaltura-ngx-client';
import { KalturaResponseProfileType } from 'kaltura-ngx-client';
import { RequestFactory } from '@kaltura-ng/kaltura-common';
import { DropFolderFileListAction } from 'kaltura-ngx-client';
import { KalturaDropFolderFileListResponse } from 'kaltura-ngx-client';
import { KalturaDropFolderFileFilter } from 'kaltura-ngx-client';

export class DropFoldersRequestFactory implements RequestFactory<DropFolderFileListAction, KalturaDropFolderFileListResponse> {
  public dropFolderIdIn: string;

  create(): DropFolderFileListAction {
    if (this.dropFolderIdIn === null) {
      return null;
    }

    return new DropFolderFileListAction({
      filter: new KalturaDropFolderFileFilter({
        orderBy: 'createdAt',
        dropFolderIdIn: this.dropFolderIdIn
      })
    }).setRequestOptions({
        responseProfile: new KalturaDetachedResponseProfile({
          type: KalturaResponseProfileType.includeFields,
          fields: 'id,status,createdAt'
      })
    });
  }
}
