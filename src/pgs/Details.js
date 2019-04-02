import React from 'react';
import { Route } from 'react-router-dom';

import LoginHome from './login_home/Main';
import LoginNewUser from './login_new_user/Main';
import LoginFindId from './login_find_id/Main';
import LoginFindPw from './login_find_pw/Main';
import LoginNewPw from './login_new_pw/Main';
import LoginAuthorize from './login_authorize/Main';

import ManagerBuyProduct from './manager_buy_product/Main';
import ManagerBuyList from './manager_buy_list/Main';
import ManagerBuyRcvPlace from './manager_buy_rcvplace/Main';
import ManagerHome from './manager_home/Main';
import ManagerReport from './manager_report/Main';
import ManagerGrade from './manager_grade/Main';
import ManagerRack from './manager_rack/Main';

import PrintHome from './print_home/Main';

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
            <Route path='/login_home' component={LoginHome} />
            <Route path='/login_new_user' component={LoginNewUser}/>
            <Route path='/login_find_id' component={LoginFindId}/>
            <Route path='/login_find_pw' component={LoginFindPw}/>
            <Route path='/login_new_pw' component={LoginNewPw}/>
            <Route path='/login_new_pw#1' component={ModalAsk}/>
            <Route path='/login_authorize' component={LoginAuthorize}/>

            <Route exact path="/manager_buy_product" component={ManagerBuyProduct}/>
            <Route path="/manager_buy_list" component={ManagerBuyList} />
            <Route path="/manager_buy_rcvplace" component={ManagerBuyRcvPlace}/>
            <Route path="/manager_home" component={ManagerHome}/>
            <Route path="/manager_report" component={ManagerReport}/>
            <Route path="/manager_rack" component={ManagerRack}/>
            <Route path="/manager_grade" component={ManagerGrade}/>

            <Route path='/print_home' component={PrintHome} />
            <Route path='/print_home/modals_ask' component={ModalAsk} />
            <Route path="/print_home/modals_select_printer" component={ModalSelectPrinter} />
            <Route path="/print_home/modals_pn" component={ModalPn} />
            <Route path="/print_home/modals_release" component={ModalRelease} />
            <Route path="/print_home/modals_rack" component={ModalRack} />
   

        </div>
    );
};

export default Details;