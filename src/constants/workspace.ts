import { IPermission } from '@/models/permission';
import { EWorkspacePermission } from '@/types/permissions';

export const workspacePermissions: IPermission[] = [
  {
    id: 1,
    name: 'Vai trò',
    groups: [
      {
        id: 1,
        isActive: false,
        label: 'Xem',
        permission: EWorkspacePermission.VIEW_ROLE,
      },
      {
        id: 2,
        isActive: false,
        label: 'Sửa',
        permission: EWorkspacePermission.EDIT_ROLE,
      },
      {
        id: 3,
        isActive: false,
        label: 'Xóa',
        permission: EWorkspacePermission.DELETE_ROLE,
      },
      {
        id: 4,
        isActive: false,
        label: 'Tạo',
        permission: EWorkspacePermission.CREATE_ROLE,
      },
    ],
  },
  {
    id: 2,
    name: 'Không gian làm việc',
    groups: [
      {
        id: 2,
        isActive: false,
        label: 'Sửa',
        permission: EWorkspacePermission.EDIT_WORKSPACE,
      },
      // {
      //   id: 3,
      //   isActive: false,
      //   label: 'Xóa',
      //   permission: EWorkspacePermission.DELETE_WORKSPACE,
      // },
    ],
  },
  {
    id: 3,
    name: 'Thành viên',
    groups: [
      {
        id: 4,
        isActive: false,
        label: 'Thêm',
        permission: EWorkspacePermission.ADD_MEMBER,
      },
      {
        id: 3,
        isActive: false,
        label: 'Xóa',
        permission: EWorkspacePermission.DELETE_MEMBER,
      },
    ],
  },
  {
    id: 4,
    name: 'Xem không gian',
    groups: [
      {
        id: 1,
        isActive: false,
        label: 'Dạng biểu đồ',
        permission: EWorkspacePermission.VIEW_LAYOUT_CHART,
      },

      {
        id: 2,
        isActive: false,
        label: 'Dạng tài liệu',
        permission: EWorkspacePermission.VIEW_LAYOUT_DOCUMENT,
      },
      {
        id: 3,
        isActive: false,
        label: 'Dạng danh sách',
        permission: EWorkspacePermission.VIEW_LAYOUT_LIST,
      },
      {
        id: 4,
        isActive: false,
        label: 'Dạng timeline',
        permission: EWorkspacePermission.VIEW_ALL_TASK,
      },
    ],
  },
  {
    id: 5,
    name: 'Bước',
    groups: [
      {
        id: 1,
        isActive: false,
        label: 'Sửa',
        permission: EWorkspacePermission.EDIT_STAGE,
      },

      {
        id: 2,
        isActive: false,
        label: 'Xóa',
        permission: EWorkspacePermission.DELETE_STAGE,
      },
      {
        id: 3,
        isActive: false,
        label: 'Tạo',
        permission: EWorkspacePermission.CREATE_STAGE,
      },
    ],
  },
  {
    id: 6,
    name: 'Thẻ công việc',
    groups: [
      {
        id: 1,
        isActive: false,
        label: 'Thêm',
        permission: EWorkspacePermission.CREATE_TASK,
      },

      {
        id: 2,
        isActive: false,
        label: 'Xóa',
        permission: EWorkspacePermission.DELETE_TASK,
      },
    ],
  },
];

export const workspaceListPermission: string[] = Object.keys(EWorkspacePermission);
