export const tableHeader = [
  '',
  'Fee Description',
  'Total',
  'Paid',
  'Pre-Con.',
  'Balance',
  'Received'
]

export interface updateFmsFee {
  bank?: string
  consession_amount?: string
  fees_paid_id?: any
  fee_paid_amount?: string | any
  fee_paid_date?: any
  fee_type?: any
  due_date?: any
  Fee?: any
  remarks?: string
  fine_amount?: string
  invoice_number?: string
  mode_of_payment?: string
  ref_no?: string
  fee_balance?: any
}

export interface IntialProps {
  remarks: any
  bank: any
  consession_amount: any
  fees_paid_id: any
  fee_paid_amount: any
  fee_paid_date: any
  fee_type: any
  fine_amount: any
  invoice_number: any
  mode_of_payment: any
  ref_no: any
  fee_balance: any
}

export const initialPaymentValues: IntialProps = {
  remarks: '',
  bank: '',
  consession_amount: '',
  fees_paid_id: '',
  fee_paid_amount: '',
  fee_paid_date: '',
  fee_type: '',
  fine_amount: '',
  invoice_number: '',
  mode_of_payment: '',
  ref_no: '',
  fee_balance: ''
}

export const termInitialValues = {
  termId: '',
  termName: ''
}
