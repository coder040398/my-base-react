import { Button } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  height: 36px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 22px;
  box-shadow: ${(props) => props.theme.boxShadow};
  border: 1px solid ${(props) => props.theme.dark3};
  color: ${(props) => props.theme.primary};
  &:hover,
  &:active,
  &:hover {
    border-color: ${(props) => props.theme.primary} !important;
    color: ${(props) => props.theme.primary} !important;
  }
  &.ant-btn-primary {
    border: none;
    box-shadow: none;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.primary};
    &:hover,
    &:active,
    &:hover {
      background: ${(props) => props.theme.primaryDark} !important;
    }
  }
  &.ant-btn-dashed {
    color: ${(props) => props.theme.primary};
    border: 1px dashed ${(props) => props.theme.gray} !important;
    &:hover,
    &:active,
    &:hover {
      border: 1px dashed ${(props) => props.theme.primary} !important;
    }
  }
  &.ant-btn-link {
    border-color: transparent !important;
    box-shadow: none;
    line-height: 22px;
  }
  &.ant-btn-lg {
    height: 50px;
  }
  &[disabled] {
    background: ${(props) => props.theme.dark4};
    color: ${(props) => props.theme.dark2};
    &:hover,
    &:active,
    &:focus {
      background: ${(props) => props.theme.dark4} !important;
      color: ${(props) => props.theme.dark2} !important;
    }
  }
  &.ant-btn-icon-only.ant-btn-lg {
    width: 50px;
    border-color: ${(props) => props.theme.dark3};
  }
`;
export default StyledButton;
