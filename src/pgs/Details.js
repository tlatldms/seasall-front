import React from 'react';
import { Route } from 'react-router-dom';

import Footer from 'common/Footer';
import PrintHeader from 'common/Header';
import UnderHeader from 'common/UnderHeader';

import LoginHome from './login_home/Main';
import LoginFindId from './login_find_id/Main';
import LoginFindPw from './login_find_pw/Main';
import LoginFindIdDone from './login_find_id_done/Main';
import LoginFindPwDone from './login_find_pw_done/Main';
import LoginNewPw from './login_new_pw/Main';
import LoginAuthorize from './login_authorize/Main';
import LoginAuthorizeDone from './login_authorize_done/Main';

import ManagerBuyProduct from './manager_buy_product/Main';
import ManagerBuyList from './manager_buy_list/Main';
import ManagerBuyRcvPlace from './manager_buy_rcvplace/Main';

import ManagerHome from './manager_home/Main';
import ManagerHomePopup from './manager_home_popup/Main';
import ManagerReport from './manager_report/Main';
import ManagerGrade from './manager_grade/Main';
import ManagerRack from './manager_rack/Main';

import PrintHome from './print_home/Main';
import PrintMypage from './print_mypage/Main';

import ModalAsk from 'pgs/modals_ask/Main';
import ModalRelease from 'pgs/modals_release/Main';
import ModalPn from 'pgs/modals_pn/Main';
import ModalRack from 'pgs/modals_rack/Main';
import ModalSelectPrinter from 'pgs/modals_select_printer/Main';

const Details = () => {
    return (
        <div>

            <Route path='/aa' component={LoginFindId} />
            <Route path='/aa/bb' component={ModalAsk} />
            <Route exact path='/' component={LoginHome} />

            <Route path='/login_find_id' component={LoginFindId}/>
            <Route path='/login_find_id_done' component={LoginFindIdDone}/>
            <Route path='/login_find_pw' component={LoginFindPw}/>
            <Route path='/login_find_pw_done' component={LoginFindPwDone}/>
            <Route path='/login_new_pw' component={LoginNewPw}/>
            <Route path='/login_new_pw#1' component={ModalAsk}/>

            <Route path='/login_authorize' component={LoginAuthorize}/>

            <Route path='/login_authorize_done' component={LoginAuthorizeDone}/>

            <Route exact path="/manager_buy_product" component={ManagerBuyProduct}/>
            <Route path='/manager_buy_list' component={PrintHeader} />
            <Route path='/manager_buy_list' component={UnderHeader} />
            <Route path="/manager_buy_list" component={ManagerBuyList} />
            <Route path="/manager_buy_rcvplace" component={ManagerBuyRcvPlace}/>

            <Route path='/manager_home' component={PrintHeader} />
           
            <Route path="/manager_home" component={ManagerHome}/>
            <Route path="/manager_home/popup" component={ManagerHomePopup}/>

            <Route path='/manager_report' component={PrintHeader} />
            <Route path='/manager_report' component={UnderHeader} />
            <Route path="/manager_report" component={ManagerReport}/>

            <Route path='/manager_rack' component={PrintHeader} />
            <Route path='/manager_rack' component={UnderHeader} />
            <Route path="/manager_rack" component={ManagerRack}/>

            <Route path='/manager_grade' component={PrintHeader} />
            <Route path='/manager_grade' component={UnderHeader} />
            <Route path="/manager_grade" component={ManagerGrade}/>
            
            <Route path='/print_home' component={PrintHome} />
            <Route path='/print_mypage' component={PrintHeader} />
            <Route path='/print_mypage' component={PrintMypage} />
            <Route path='/print_home/modals_ask' component={ModalAsk} />
            <Route path="/print_home/modals_select_printer" component={ModalSelectPrinter} />
            <Route path="/print_home/modals_pn" component={ModalPn} />
            <Route path="/print_home/modals_release" component={ModalRelease} />
            <Route path="/print_home/modals_rack" component={ModalRack} />

            <Route path='/' component={Footer} />
   

        </div>
    );
};

export default Details;