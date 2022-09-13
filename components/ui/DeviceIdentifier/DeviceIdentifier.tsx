import React from "react";

export default class DeviceIdentifier extends React.PureComponent {
  state: any;
  resize: any;
  props: any;
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: false,
      isDesktop: false,
      isTablet: false,
      // can also check for tablets
    };
    this.resize = this.handleWindowResize.bind(this);
  }
  handleWindowResize() {
    const resolution = window.innerWidth;
    const isMobile = resolution >= 280 && resolution <= 990;
    const isTablet = resolution > 990 && resolution <= 1024;
    const isDesktop = !isMobile && !isTablet;

    this.setState({
      isMobile,
      isTablet,
      isDesktop,
    });
  }
  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener("resize", this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  render() {
    const { isMobile, isTablet, isDesktop } = this.state;
    const {
      isDesktop: propsIsDesktop = false,
      isMobile: propsIsMobile = false,
      isTablet: propsIsTablet = false,
    } = this.props;
    if (
      (isDesktop && propsIsDesktop) ||
      (isMobile && propsIsMobile) ||
      (isTablet && propsIsTablet)
      // can add more checks like tablets
    ) {
      return <React.Fragment>{this.props.children}</React.Fragment>;
    }
    return null;
  }
}
