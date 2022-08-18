<script lang="ts" setup>
import { capitalize } from '~/utils/str'
import {useHttpGet} from "~/stores/httpGet";

// composable
const { t } = useLang()

const get = useHttpGet()
get.request()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.blank.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.blank.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <h1> 從 api 拿到資料 {{ get.getAccept }}</h1>
      <PageTitle :text="$t('pages.blank.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div v-for="i in 30" :key="i" class="text-6xl uppercase">
          {{ $t('pages.blank.just_blank_page_with_title') }}
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
