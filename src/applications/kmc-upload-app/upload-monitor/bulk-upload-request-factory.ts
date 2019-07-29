import { KalturaBulkUploadObjectType } from 'kaltura-ngx-client';
import { KalturaDetachedResponseProfile } from 'kaltura-ngx-client';
import { KalturaResponseProfileType } from 'kaltura-ngx-client';
import { KalturaBulkUploadFilter } from 'kaltura-ngx-client';
import { BulkListAction } from 'kaltura-ngx-client';
import { RequestFactory } from '@kaltura-ng/kaltura-common';
import { KalturaBulkUploadListResponse } from 'kaltura-ngx-client';

export class BulkUploadRequestFactory implements RequestFactory<BulkListAction, KalturaBulkUploadListResponse> {
  create(): BulkListAction {
    const bulkUploadObjectTypeIn = [
      KalturaBulkUploadObjectType.entry,
      KalturaBulkUploadObjectType.category,
      KalturaBulkUploadObjectType.user,
      KalturaBulkUploadObjectType.categoryUser
    ];

    return new BulkListAction({
      bulkUploadFilter: new KalturaBulkUploadFilter({
          orderBy: 'uploadedOn',
          bulkUploadObjectTypeIn: bulkUploadObjectTypeIn.join(','),
      })
    }).setRequestOptions({
      responseProfile: new KalturaDetachedResponseProfile({
          type: KalturaResponseProfileType.includeFields,
          fields: 'id,status,uploadedOn'
      })
    });
  }
}
