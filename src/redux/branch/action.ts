import { addBranches, getBranchByInstitute } from './api'

import { branchSlice } from './reducer'

const { updateSelectedBranch, resetBranch } = branchSlice.actions

export { addBranches, getBranchByInstitute, updateSelectedBranch, resetBranch }
