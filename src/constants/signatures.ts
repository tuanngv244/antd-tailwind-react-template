import { TagStatus } from '@/models/general';
import { ERequestSignatureStatus } from '@/models/signatures';

const requestSignatureStatusLabels = {
  [ERequestSignatureStatus.IN_PROGRESS]: 'Đang xử ký',
  [ERequestSignatureStatus.SIGNING]: 'Đang ký',
  [ERequestSignatureStatus.COMPLETED]: 'Đã ký',
};

const requestSignatureListStatus: TagStatus[] = [
  {
    color: 'bg-orange',
    name: 'Đang xử lý',
    status: ERequestSignatureStatus.IN_PROGRESS,
  },
  {
    color: 'bg-mediumBlue',
    name: 'Đang ký',
    status: ERequestSignatureStatus.SIGNING,
  },
  {
    color: 'bg-green52',
    name: 'Đã ký',
    status: ERequestSignatureStatus.COMPLETED,
  },
  {
    color: 'bg-error',
    name: 'Đã hủy',
    status: ERequestSignatureStatus.CANCELED,
  },
];

const objectRequestStatusLabels = requestSignatureListStatus.reduce((acc, curr) => {
  acc[curr.status] = curr.name;
  return acc;
}, {} as { [id: string]: string });

export { requestSignatureStatusLabels, requestSignatureListStatus, objectRequestStatusLabels };
