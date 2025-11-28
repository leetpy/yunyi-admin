import { createPinia } from 'pinia'
import { useAppStore } from '@/stores/modules/app'
import { useMenuStore } from '@/stores/modules/menu'


const store = createPinia()

export { store, useAppStore, useMenuStore }
