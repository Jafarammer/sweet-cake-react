import React from "react";
import { Modal, Button, Divider } from "antd";
import { IoIosCloseCircle } from "react-icons/io";
import "./styles/modal_confirm.scss";

const ModalConfirm = ({
  open,
  onCancel,
  title = "Unknown",
  onAction,
  children,
  loading = false,
  textButtonAction = "Unknown",
  colorButtonAction = "primary",
}) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      className="modal-confirm"
      title={title}
      width={420}
      classNames={{
        header: "custom-modal-header",
        body: "custom-modal-body",
      }}
      closeIcon={<IoIosCloseCircle size={20} />}
      centered
      footer={
        <div className="modal-confirm-footer">
          <Divider size="small" />
          <div className="modal-confirm-footer-content">
            <Button variant="filled" color="default" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              variant="solid"
              color={colorButtonAction}
              onClick={onAction}
              loading={loading}
            >
              {textButtonAction}
            </Button>
          </div>
        </div>
      }
    >
      {children}
    </Modal>
  );
};

export default ModalConfirm;
