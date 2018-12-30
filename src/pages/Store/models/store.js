import { addproductService } from '@/services/product';

// import { getPageQuery } from '../utils/utils';
import { stringify } from 'qs';
import { routerRedux } from 'dva/router';
import moment from 'moment';
import { message } from 'antd';

export default {
  namespace: 'store',
  state: {
    scanData: {
      cloudAccount: null,
      logs: null,
      date: null,
    },
    newAccountData: {},
    data: {
      list: [],
      pagination: {},
    },

    single: {},
    addRespose: {
      status: '',
      message: '',
    },
  },

  effects: {
    *addProduct({ payload }, { call, put, select }) {
      console.log('inside add products');
      try {
        const response = yield call(addproductService ,payload);
        console.log("response ",response)
      } catch (ee) {
        console.log('ee ', ee);
      }
      // message[response.status](response.body.message);
      // // yield put({
      // //   type: 'showResponseOfaddCloudaccount',
      // //   payload: {
      // //     response,
      // //   },
      // // });
    },

    /////////////deleteAccount///////////

    *deleteAccount({ payload }, { call, put, select }) {
      const response = yield call(deleteAccount, payload.accountData);
      // message[response.status](response.body.message);
      yield put({
        type: 'DeleteAccount',
        payload: {
          cloudAccount: payload.accountData.cloudAccount,
        },
      });
    },

    *setScanLogUrl({ payload }, { call, put, select }) {
      const { date } = payload;

      const cloudAccount = payload['cloud-account'];

      const defaultLogDate = moment(date).format('HH:mm:ss MMMM DD YYYY');

      const newParams = {
        ...getPageQuery(),
        date: defaultLogDate,
        'cloud-account': cloudAccount,
      };

      yield put(routerRedux.replace(`?${stringify(newParams, { encode: true })}`));
    },
    *scanLogDateUrl({ payload }, { call, put, select }) {
      const { date } = payload;

      const defaultLogDate = moment(date).format('HH:mm:ss MMMM DD YYYY');

      const newParams = {
        ...getPageQuery(),
        date: defaultLogDate,
      };

      yield put(routerRedux.push(`?${stringify(newParams, { encode: true })}`));

      yield put({
        type: 'addToScanData',
        payload: {
          date,
        },
      });
    },
    *resetSelectedAccount({ payload }, { call, put, select }) {
      yield put({
        type: 'addToScanData',
        payload: {
          logs: null,
          date: null,
          cloudAccount: null,
        },
      });
    },

    *selectedAccount({ payload }, { call, put, select }) {
      const newParams = {
        ...getPageQuery(),
        'cloud-account': payload.cloudAccount,
      };

      yield put({
        type: 'addToScanData',
        payload: {
          cloudAccount: payload.cloudAccount,
        },
      });
    },

    *fetchScanLogs({ payload }, { call, put, select }) {
      const cloudAccountSelected = yield select(state => state.cloudAccounts.scanData.cloudAccount);

      var response = yield call(getScanLogs, payload);

      const logs = response.payload;

      const { cloudAccount, date } = payload;

      yield put({
        type: 'addToScanData',
        payload: {
          logs,
          date: date === null ? (logs[0] ? logs[0].dateEnded : 0) : payload.date,
        },
      });

      yield put({
        type: 'setScanLogUrl',
        payload: {
          date: payload.date === null ? (logs[0] ? logs[0].dateEnded : 0) : payload.date,
          'cloud-account': cloudAccountSelected,
        },
      });
    },
    *saveDocument({ payload }, { call, put, select }) {
      try {
        var response = yield call(queryUpdateCloudAccounts(payload));
      } catch (err) {
        console.log('error is ', err);
      }
    },
    *fetch({ payload = {} }, { call, put, select }) {
      const list = yield select(state => state.cloudAccounts.data.list);

      // if already exists and payload forced not true then skip fetch
      if (list.length > 0 && (payload.force === undefined || payload.force === false)) {
        return;
      }

      const response = yield call(queryCloudAccounts);

      yield put({
        type: 'save',
        payload: response,
      });

      yield put({
        type: 'dashboard/save',
        payload: {
          cloudAccount: {
            list: response,
            selected: response,
          },
        },
      });
    },
    *fetchSingle({ payload }, { call, put, select }) {
      let singleCustomerId = payload;
      let list = yield select(state => state.cloudAccounts.data.list);
      if (list.length < 1) {
        const response = yield call(queryCloudAccounts);
        yield put({
          type: 'save',
          payload: response,
        });
        list = yield select(state => state.cloudAccounts.data.list);
      }

      // if no customer id given, then fetch the first one from the list
      if (!singleCustomerId) {
        singleCustomerId = list[0].customerId;
      }

      let single = list.find(item => item.customerId === singleCustomerId);
      if (!single) {
        // doesnt exist
        return;
      }
      // const response = yield call(queryCurrent);
      yield put({
        type: 'saveSingle',
        payload: single,
      });
    },
  },

  reducers: {
    DeleteAccount(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          list: state.data.list.filter(word => word.customerId !== action.payload.cloudAccount),
        },
      };
    },
    addToScanData(state, action) {
      return {
        ...state,
        scanData: {
          ...state.scanData,
          ...action.payload,
        },
      };
    },
    save(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          list: action.payload,
        },
      };
    },

    saveSingle(state, action) {
      return {
        ...state,
        single: action.payload || {},
      };
    },
    showResponseOfaddCloudaccount(state, action) {
      return {
        ...state,
        addRespose: {
          ...state.addRespose,
          status: action.payload.response.body.status,
          message: action.payload.response.body.message,
        },
      };
    },
  },
};
