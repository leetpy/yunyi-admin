import { createPinia } from 'pinia'
import { useMenuStore } from '@/stores/modules/menu'


const store = createPinia()

export { store, useMenuStore }
