const recordsSelector = state => state.records.records
const nameSelector = state => state.records.name
const messageSelector = state => state.records.message
const isLoadingSelector = state => state.records.isLoading
const isMessageUploadingSelector = state => state.records.isMessageUploading
const errorsSelector = state => state.records.errors

export default {
  recordsSelector,
  nameSelector,
  messageSelector,
  isLoadingSelector,
  isMessageUploadingSelector,
  errorsSelector
}
