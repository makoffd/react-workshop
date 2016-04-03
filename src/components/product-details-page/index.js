import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import ProcductDetailsPage from './component.js';

function getProductById(products, pid) {
    return products.filter(item => item.id === pid / 1)[0];
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: getProductById(
            state.catalog.data.results,
            ownProps.params.id
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClickBack(e) {
            dispatch(goBack());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProcductDetailsPage);
