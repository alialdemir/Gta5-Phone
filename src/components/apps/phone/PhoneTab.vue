<template>
  <f7-page :page-content="false">
    <f7-toolbar tabbar labels bottom>
      <f7-link
        tab-link="#Favorite"
        text="Favoriler"
        icon-ios="f7:star_fill"
        icon-aurora="f7:star_fill"
        icon-md="f7:star_fill"
      ></f7-link>
      <f7-link
        tab-link="#Recents"
        text="Son Aramalar"
        icon-ios="f7:clock_fill"
        icon-aurora="f7:clock_fill"
        icon-md="f7:clock_fill"
      ></f7-link>
      <f7-link
        tab-link="#Contacts"
        text="Kişiler"
        tab-link-active
        icon-ios="f7:person_crop_circle"
        icon-aurora="f7:person_crop_circle"
        icon-md="f7:person_crop_circle"
      ></f7-link>
      <f7-link
        tab-link="#Keypad"
        text="Tuşlar"
        icon-ios="f7:circle_grid_3x3_fill"
        icon-aurora="f7:circle_grid_3x3_fill"
        icon-md="f7:circle_grid_3x3_fill"
      ></f7-link>
    </f7-toolbar>

    <f7-tabs>
      <f7-tab id="Favorite" class="page-content">
        <gta-favorite />
      </f7-tab>
      <f7-tab id="Recents" class="page-content">
        <gta-recents />
      </f7-tab>
      <f7-tab id="Contacts" class="page-content" tab-active>
        <gta-contacts />
      </f7-tab>
      <f7-tab id="Keypad" class="page-content">
        <gta-keypad />
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
    

<style lang="less" scoped>
.toolbar.tabbar.toolbar-bottom {
  margin-bottom: 17px;
}

.tab-link-active {
  color: #2196f3 !important;
}

.tab-link-highlight {
  display: none;
}
</style>