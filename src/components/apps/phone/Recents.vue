<template>
  <f7-page>
    <f7-segmented raised class="m-4" color="gray" text-color="white">
      <f7-button tab-link="#tab1" tab-link-active>Tümü</f7-button>
      <f7-button tab-link="#tab2">Gelen</f7-button>
    </f7-segmented>

    <h1 class="mt-4 mb-0">Son Aramalar</h1>

    <f7-tabs>
      <f7-tab id="tab1" tab-active class="page-content">
        <f7-list media-list>
          <f7-list-item title="555 555 55 55" after="Dün">
            <template #media>
              <f7-icon f7="info_circle" size="22px" color="blue"></f7-icon>
            </template>
          </f7-list-item>
          <f7-list-item title="222 222 22 22" after="Cuma">
            <template #media>
              <f7-icon f7="info_circle" size="22px" color="blue"></f7-icon>
            </template>
          </f7-list-item>
          <f7-list-item title="333 333 33 33" after="Perşembe">
            <template #media>
              <f7-icon f7="info_circle" size="22px" color="blue"></f7-icon>
            </template>
          </f7-list-item>
        </f7-list>
      </f7-tab>
      <f7-tab id="tab2" class="page-content">
        <f7-list media-list>
          <f7-list-item title="444 444 44 44" after="Dün">
            <template #media>
              <f7-icon f7="info_circle" size="22px" color="blue"></f7-icon>
            </template>
          </f7-list-item>
          <f7-list-item title="222 222 22 22" after="Cuma">
            <template #media>
              <f7-icon f7="info_circle" size="22px" color="blue"></f7-icon>
            </template>
          </f7-list-item>
          <f7-list-item title="333 333 33 33" after="Perşembe">
            <template #media>
              <f7-icon f7="info_circle" size="22px" color="blue"></f7-icon>
            </template>
          </f7-list-item>
        </f7-list>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>


<style lang="less">
li.media-item .item-inner {
  display: flex;
}

.item-title-row {
  width: 88%;
}
</style>