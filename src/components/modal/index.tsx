import React, { PureComponent, createRef } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

type CustomModalProps = {
  closeEvent: () => void;
  width?: number | string;
  className?: string;
  children: React.ReactNode;
};

export class CustomModal extends PureComponent<CustomModalProps> {
  modal: React.RefObject<HTMLDivElement> = createRef();
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event: MouseEvent) => {
    const { closeEvent } = this.props;
    if (this.modal.current) {
      if (event.target instanceof HTMLElement && !this.modal.current.contains(event.target)) closeEvent();
    }
  };

  render() {
    const { children, width, className } = this.props;
    return ReactDOM.createPortal(
      <div className="wrapper">
        <div style={{ width }} className={className ? `modal ${className}` : 'modal'} ref={this.modal}>
          {children}
        </div>
      </div>,
      document.body
    );
  }
}
