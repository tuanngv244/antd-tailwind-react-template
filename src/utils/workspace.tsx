import { EPriority, ERemind, EState } from '@/types/enums';

export const remindOptions = [
  { value: ERemind.NONE, label: 'Không có' },
  { value: ERemind.ON_DUE_DATE, label: 'Vào thời điểm hết hạn' },
  { value: ERemind.FIVE_MINUTES, label: 'Trước 5 phút' },
  { value: ERemind.TEN_MINUTES, label: 'Trước 10 phút' },
  { value: ERemind.FIFTY_MINUTES, label: 'Trước 15 phút' },
  { value: ERemind.ONE_HOUR, label: 'Trước 1 giờ' },
  { value: ERemind.TWO_HOUR, label: 'Trước 2 giờ' },
  { value: ERemind.ONE_DAY, label: 'Trước 1 ngày' },
  { value: ERemind.TWO_DAY, label: 'Trước 2 ngày' },
];

export const priorityOptions = [
  { label: 'Thấp', value: EPriority.LOW, color: 'blue' },
  { label: 'Trung bình', value: EPriority.MEDIUM, color: 'orange' },
  { label: 'Cao', value: EPriority.HIGH, color: 'red' },
];

export const stateOptions = [
  { label: 'Cần làm', value: EState.TODO, color: 'blue' },
  { label: 'Đang xử lý', value: EState.IN_PROGRESS, color: 'orange' },
  { label: 'Hoàn thành', value: EState.COMPLETED, color: 'red' },
  // { label: 'Quá hạn ', value: EState.EXPIRED, color: 'red' },
  { label: 'Hủy', value: EState.REJECT, color: 'red' },
];

export const labelOptions = [
  { label: 'Thấp', value: EPriority.LOW, color: 'blue' },
  { label: 'Trung bình', value: EPriority.MEDIUM, color: 'orange' },
  { label: 'Cao', value: EPriority.HIGH, color: 'red' },
];

export const listColorTag = [
  'default',
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];
