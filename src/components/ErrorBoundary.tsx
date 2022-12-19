import React from "react";
import ServerErrorDislay from "./ServerErrorDislay/ServerErrorDislay";

interface Props {
  children: React.ReactNode;
}

interface State {
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    error: undefined,
  };

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error: error });
  }

  public render() {
    if (this.state.error) {
      return <ServerErrorDislay />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary