import { connect } from 'react-redux';

import MainSidebar from '../../components/MainSidebar';

const mapStateToProps = (state) => ({
	users: state.users
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainSidebar);