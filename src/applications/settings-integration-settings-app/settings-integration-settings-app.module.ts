import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './settings-integration-settings-app.routes';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AreaBlockerModule, InputHelperModule, StickyModule, TooltipModule} from '@kaltura-ng/kaltura-ui';
import {TranslateModule} from '@ngx-translate/core';
import {SettingsIntegrationSettingsComponent} from './settings-integration-settings.component';
import {AccountInfoComponent} from './account-info/account-info.component';
import {EntitlementComponent} from './entitlement/entitlement.component';
import {EntitlementTableComponent} from './entitlement/entitlement-table/entitlement-table.component';
import {PopupWidgetModule} from '@kaltura-ng/kaltura-ui';
import {NewEntitlementComponent} from './entitlement/new-entitlement/new-entitlement.component';
import {EditEntitlementComponent} from './entitlement/edit-entitlement/edit-entitlement.component';
import {CategoriesModule} from 'app-shared/content-shared/categories/categories.module';
import { KMCPermissionsModule } from 'app-shared/kmc-shared/kmc-permissions';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DistributionComponent } from "./distribution/distribution.component";
import { ProfilesTableComponent } from "./distribution/profiles-table/profiles-table.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    AreaBlockerModule,
    TranslateModule,
    TooltipModule,
    MenuModule,
    PopupWidgetModule,
    StickyModule,
    CategoriesModule,
    KMCPermissionsModule,
    InputHelperModule,
    KMCPermissionsModule,
      TableModule
  ],
  declarations: [
    SettingsIntegrationSettingsComponent,
    AccountInfoComponent,
    EntitlementComponent,
    EntitlementTableComponent,
    NewEntitlementComponent,
    EditEntitlementComponent,
    DistributionComponent,
    ProfilesTableComponent
  ]
})
export class SettingsIntegrationSettingsAppModule {
}
