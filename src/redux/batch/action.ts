import { addBatches } from './api'

import { batchSlice } from './reducer'

const { updateSelectedBatch, resetBatch } = batchSlice.actions

export { addBatches, resetBatch, updateSelectedBatch }
