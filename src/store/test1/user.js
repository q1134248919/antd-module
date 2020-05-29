const office = (state = '2', action) => {
    switch (action.type) {
        //处理 类型为 GET_OFFICE_LIST 结果数据
        case 'test2':
            return{
                officeList: action.payLoad
            };
        //处理 类型为 GET_OFFICE_DETAIL 结果数据
        case 'test3':
            return {
                officeInfo: action.payLoad
            };
        default:
        //如果类型为匹配到 返回当前state
            return state;
    }
};

export default  office;