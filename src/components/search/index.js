import { connect } from 'react-redux';
import Search from './component.js';
import { searchProduct } from '~/actions';

const mapDispatchToProps = dispatch => {
    return {
        onChange(e) {
            dispatch(searchProduct(e.target.value));
        }
    };
};

const mapStateToProps = state => {
    return {
        value: state.catalog.searchPhrase
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
