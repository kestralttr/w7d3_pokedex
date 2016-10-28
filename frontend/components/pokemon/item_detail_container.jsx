import {connect} from 'react-redux';
import ItemDetail from './item_detail';

const mapStateToProps = (state,ownProps) => {
  return { item: ownProps.item,
  };
};

export default connect(
  mapStateToProps
)(ItemDetail);
