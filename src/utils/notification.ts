const renderType = (type: string, value: string) => {
  switch (type) {
    case 'STATE': {
      return ' trạng thái ';
    }
    case 'STAGE': {
      return ' bước thành ';
    }
    case 'COMMENT': {
      return ' bình luận ';
    }
    case 'DUEDATE': {
      return !value ? ' ngày hết hạn. ' : ' ngày hết hạn thành ';
    }
    case 'ATTACHMENT': {
      return ' tệp đính kèm ';
    }
    case 'LABEL': {
      return ' nhãn dán ';
    }
    case 'USER': {
      return ' nhân viên ';
    }
    case 'TASK': {
      return ' thẻ công việc ';
    }
  }
};

const renderAction = (action: string) => {
  switch (action) {
    case 'CREATE': {
      return ' đã thêm ';
    }
    case 'UPDATE': {
      return ' đã cập nhật ';
    }
    case 'DELETE': {
      return ' đã xóa ';
    }
  }
};
const renderStatusLabel = (action: string) => {
  switch (action) {
    case 'COMPLETED': {
      return 'hoàn thành';
    }
    case 'IN_PROGRESS': {
      return 'đang xử lý';
    }
    case 'SIGNING': {
      return 'đang ký';
    }
    default:
      return '';
  }
};

const checkDudate = (type: string, value: string) => {
  if (type == 'DUEDATE' && !value) return true;

  return false;
};
const renderTypeReqSignLog = (type: string, value?: string) => {
  switch (type) {
    case 'SIGN': {
      return ' đã ký số tài liệu ';
    }
    case 'UPDATE_NOTE': {
      return ' đã cập nhật ghi chú thành ';
    }
    case 'UPDATE_STATUS': {
      const renderMessage = () => {
        switch (value) {
          case 'COMPLETED': {
            return ' yêu cầu ký số ';
          }
          case 'IN_PROGRESS': {
            return ' chuyển trạng thái yêu cầu ký số thành ';
          }
          case 'SIGNING': {
            return ' chuyển trạng thái yêu cầu ký số thành ';
          }
          case 'CANCELED': {
            return ' hủy yêu cầu ký số ';
          }
          default:
            return '';
        }
      };
      return renderMessage();
    }
    case 'CREATE': {
      return ' yêu cầu ký số được tạo ';
    }
    case 'UPDATE_USER_SIGN': {
      return ' hoàn thành ký ';
    }
    default:
      return '';
  }
};

export { renderAction, renderType, checkDudate, renderTypeReqSignLog, renderStatusLabel };
