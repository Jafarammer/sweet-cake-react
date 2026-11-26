import React from "react";
import { Modal, Button, Divider } from "antd";
import { IoIosCloseCircle } from "react-icons/io";
import "./styles/modal_delete.scss";

const ModalDelete = ({ open, onCancel, onDelete, children }) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      className="modal-delete"
      title="Comfirm Delete"
      width={420}
      classNames={{
        header: "custom-modal-header",
        body: "custom-modal-body",
      }}
      closeIcon={<IoIosCloseCircle size={20} />}
      centered
      footer={
        <div className="modal-delete-footer">
          <Divider size="small" />
          <div className="modal-delete-footer-content">
            <Button variant="filled" color="default" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="solid" color="danger" onClick={onDelete}>
              Delete
            </Button>
          </div>
        </div>
      }
    >
      {children}
    </Modal>
  );
};

export default ModalDelete;
