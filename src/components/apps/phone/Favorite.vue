<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link
          icon-ios="f7:plus"
          text-color="blue"
          icon-aurora="f7:plus"
          icon-md="f7:plus"
          @click="isBottom = !isBottom"
        ></f7-link>
      </f7-nav-left>
    </f7-navbar>

    <f7-block-title class="mt-4">Favoriler</f7-block-title>
    <f7-list media-list>
      <f7-list-item title="666 555 55 55">
        <template #media>
          <f7-icon f7="info_circle" size="22px" color="blue"></f7-icon>
        </template>
      </f7-list-item>
      <f7-list-item title="222 222 22 22">
        <template #media>
          <f7-icon f7="info_circle" size="22px" color="blue"></f7-icon>
        </template>
      </f7-list-item>
      <f7-list-item title="333 333 33 33">
        <template #media>
          <f7-icon f7="info_circle" size="22px" color="blue"></f7-icon>
        </template>
      </f7-list-item>
    </f7-list>
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