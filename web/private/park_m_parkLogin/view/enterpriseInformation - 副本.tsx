﻿import * as React from "react";
import "css!./styles/enterpriseInformation.css"
import DataService from "dataService";
import { string } from "prop-types";
import "css!./styles/resetAntdMobile.css"
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';

interface IProps {
}

interface IState {
  imgList: Array<any>,
  elegantImgList: Array<any>,
  productImgList: Array<any>,
  panoramaImgList: Array<any>,
  modifyState: boolean,
  inputEnterpriseIDValue: string,
  inputEnterpriseNameValue: string,
  inputEnterprisePositionValue: string,
  contactsValue: string,
  phoneValue: string,
  officialWebsiteValue: string,
  descriptionValue: string,
  ID: string,
  name: string,
  headimageurl: string,
  address: string,
  Contacts: string,
  phone: string,
  company_type: string,
  website: string,
  descript: string,
  inputCompanyType: string,
  companyTypeBox: string,
  companyTypeUL: Array<any>,
  companyTypeIndexof: number,
  companyType_id_in: string,
  companyType_name_in: string,
  files: Array<any>,
  filesLogo: Array<any>,
  multiple: boolean,
  update_headimgurl: string,
  filesElegant: Array<any>,
  filesProduct: Array<any>,
  filesPanorama: Array<any>,
  elegant: Array<any>,
  product: Array<any>,
  panorama: Array<any>,
}



class EnterpriseInformation extends React.Component<{ history: any }>{
  public readonly state: Readonly<IState> = {
    imgList: ["./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg"],
    elegantImgList: ["./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", ],
    productImgList: ["./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg"],
    panoramaImgList: ["./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg"],
    modifyState: false, // 修改状态
    inputEnterpriseIDValue: "123456",
    inputEnterpriseNameValue: "请输入企业名称",
    inputEnterprisePositionValue: "请输入详细地址",
    contactsValue: "请输入联系人姓名",
    phoneValue: "请输入联系人电话",
    officialWebsiteValue: "请输入企业官方网址",
    descriptionValue: "400字内",
    inputCompanyType:"请选择企业分类",
    // 读取企业详细信息
    ID:"123456",
    name: "浙江永拓信息科技有限公司",
    headimageurl: "./park_m/image/tx.jpg",
    address: "桂林市信息产业园E座B区3楼",
    Contacts: "XXX",
    phone: "13011112222",
    company_type: "科技服务",
    website: "www.yongtoc.com",
    descript:"      浙江永拓信息科技有限公司是浙江永拓实业有限公司旗下的控股子公司。 公司由计算机图形学、计算机应用学、物联网技术等三方面专家组成，是一家专注于以3D为展现方式，解决物理空间关系的技术提供商，致力于成为全球领先3D可视化企业，为客户和合作伙伴全面提供3D可视化技术的服务，实现其业务的差异化竞争优势。",
    companyTypeBox: "hide",
    companyTypeUL: [],
    companyTypeIndexof: 0,
    companyType_id_in:"",
    companyType_name_in: "",

    multiple: false,
    files:[],
    filesLogo: [],
    update_headimgurl: "",
    filesElegant: [{
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
      name: "xxx图片",
    },{
        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
        id: '2122',
        name: "xxx图片",
      }],
    filesProduct: [{
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2123',
      name: "xxx图片",
    }],
    filesPanorama: [{
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2124',
      name: "xxx图片",
    }],
    elegant: [],
    product:[],
    panorama:[],
  }

  public constructor(props) {
    super(props);

    this.setCompanyinfo = this.setCompanyinfo.bind(this);
    this.setCompanyType = this.setCompanyType.bind(this);
    this.setLogoImg = this.setLogoImg.bind(this);
    this.setElegantImg = this.setElegantImg.bind(this);
    this.setProductImg = this.setProductImg.bind(this);
    this.setPanoramaImg = this.setPanoramaImg.bind(this);
    
  }

  public dataService: DataService = new DataService()

  componentDidMount() {
    let userid = localStorage.getItem("userId");
    //this.dataService.getCompanyInfo(this.setCompanyinfo, userId);
    this.dataService.getCompanyInfo(this.setCompanyinfo, 3);
    this.dataService.getCompanyType(this.setCompanyType,1001); 
  }

  public setCompanyinfo(data) {
    console.log("rrrrrrrrrrrrr", data);
    this.setState({
      ID: data.response.id,
      inputEnterpriseIDValue: data.response.id,
      name: data.response.name,
      headimageurl: data.response.headimageurl,
      address: data.response.address,
      Contacts: data.response.contact,
      phone: data.response.phone,
      company_type: data.response.company_type,
      website: data.response.website,
      elegantImgList: data.response.elegant,
      productImgList: data.response.product,
      panoramaImgList: data.response.panorama,
    })
  }

  public setCompanyType(data) {
    console.log("ttttttttttt", data);
    this.setState({
      //  companyTypeUL: data.response,
      companyTypeUL: [
        {
          "id": 1,
          "name": "企业"
        },{
          "id": 2,
          "name": "企业2"
        },,{
          "id":3,
          "name": "企业3"
        },
      ]
    })  
  }

  // 显示公司列表
  public showCompanyTypeBox() {
    this.setState({
      companyTypeBox:"show companyTypeEnter",
      companyBox: "rollSelectCauseBox",
      company_id_in: this.state.companyTypeUL[this.state.companyTypeIndexof].id,
      company_name_in: this.state.companyTypeUL[this.state.companyTypeIndexof].name,
    })
  }

  // 选中企业类型
  inCompanyeTypeList(i, id, name) {
    this.setState({
      companyTypeIndexof: i,
      companyType_id_in: id,
      companyType_name_in: name,
    })
    console.log(this.state.companyType_id_in, this.state.companyType_name_in)
  }

  // 隐藏公司列表框
   hideCompanyTypeBox() {
    this.setState({
      companyTypeBox: "hide",
    })
  }

  //确认公司列表选择
   getCompanyTypeBox() {
    this.setState({
      companyTypeBox: "hide",
      company_type: this.state.companyType_id_in,
      inputCompanyType: this.state.companyType_name_in,
    })
  }

  onErrorHeadimageurl() {
    this.setState({
      headimageurl:"./park_m/image/tx.jpg"
    })
  }
  onErrorElegant() {
    this.setState({
      elegantImgList: [{ pic_url:"./park_m/image/tx.jpg"}]
    })
  }
  onErrorProduct() {
    this.setState({
      productImgList: [{ pic_url:"./park_m/image/tx.jpg"}]
    })
  }
  onErrorPanorama() {
    this.setState({
      panoramaImgList: [{ pic_url:"./park_m/image/tx.jpg"}]
    })
  }

  // 返回
  goBack() {
    this.props.history.goBack()
  }
  // 修改
  modify() {
    this.setState({ modifyState: !this.state.modifyState })
  }

  // 提交
  submit() {
    console.log("objobjobj", this.state);
 
    console.log("bobo", this.state.elegant.length);

    //let elegants = [];
    let obj = {
      //用户id
      "user_id": "1",
      //园区id

      "park_id": "1",
      //企业id（当为添加新企业时，参数为""）
      "id": "2",
      //公司名字
      "name": "桂林国家高新",
      //地址
      "address": this.state.inputEnterprisePositionValue,
      //联系人
      "contact": this.state.contactsValue,
      //电话
      "phone": "15266666666",
      //企业官网
      "website": this.state.officialWebsiteValue,
      //企业详情详情文字
      "descript": this.state.descriptionValue,
      //企业类型id
      "company_type": "1",
      "elegant": this.state.elegant,
      "product": this.state.product,
      "panorama": this.state.panorama,
      "headimageurl": this.state.update_headimgurl,
    };
    if (this.state.elegant.length == 0) {
      obj.elegant = this.state.filesElegant;
    };
    if (this.state.product.length == 0) {
      obj.product = this.state.filesProduct;
    };
    if (this.state.panorama.length == 0) {
      obj.panorama = this.state.filesPanorama;
    };

    console.log("objobjobj2222222", obj);
    this.dataService.saveCompanyInfo(this.callBackSaveCompanyInfo.bind(this), obj);
  }

 

  callBackSaveCompanyInfo(data) {
    console.log(data)
  }


  // 聚焦企业id
  focusEnterpriseID() {
    if (this.state.inputEnterpriseIDValue === "123456") {
      this.setState({ inputEnterpriseIDValue: "" })
    }
  }

  // 失焦企业id
  blurEnterpriseID() {
    if (this.state.inputEnterpriseIDValue === "") {
      this.setState({ inputEnterpriseIDValue: "123456" })
    }
  }

  // 输入企业id
  changeEnterpriseID(event) {
    this.setState({ inputEnterpriseIDValue: event.target.value })
  }

  // 聚焦企业名字
  focusEnterpriseName() {
    if (this.state.inputEnterpriseNameValue === "请输入企业名称") {
      this.setState({ inputEnterpriseNameValue: "" })
    }
  }

  // 失焦企业名字
  blurEnterpriseName() {
    if (this.state.inputEnterpriseNameValue === "") {
      this.setState({ inputEnterpriseNameValue: "请输入企业名称" })
    }
  }

  // 输入企业名字
  changeEnterpriseName(event) {
    this.setState({ inputEnterpriseNameValue: event.target.value })
  }

  // 聚焦企业位置
  focusEnterprisePosition() {
    if (this.state.inputEnterprisePositionValue === "请输入详细地址") {
      this.setState({ inputEnterprisePositionValue: "" })
    }
  }

  // 失焦企业位置
  blurEnterprisePosition() {
    if (this.state.inputEnterprisePositionValue === "") {
      this.setState({ inputEnterprisePositionValue: "请输入详细地址" })
    }
  }

  // 输入企业位置
  changeEnterprisePosition(event) {
    this.setState({ inputEnterprisePositionValue: event.target.value })
  }

  // 聚焦联系人
  focusContacts() {
    if (this.state.contactsValue === "请输入联系人姓名") {
      this.setState({ contactsValue: "" })
    }
  }

  // 失焦联系人
  blurContacts() {
    if (this.state.contactsValue === "") {
      this.setState({ contactsValue: "请输入联系人姓名" })
    }
  }

  // 输入联系人 
  changeContacts(event) {
    this.setState({ contactsValue: event.target.value })
  }

  // 聚焦联系人电话
  focusPhone() {
    if (this.state.phoneValue === "请输入联系人电话") {
      this.setState({ phoneValue: "" })
    }
  }

  // 失焦联系人电话
  blurPhone() {
    if (this.state.phoneValue === "") {
      this.setState({ phoneValue: "请输入联系人电话" })
    }
  }

  // 输入联系人电话
  changePhone(event) {
    this.setState({ phoneValue: event.target.value })
  }

  // 聚焦企业官网
  focusOfficialWebsite() {
    if (this.state.officialWebsiteValue === "请输入企业官方网址") {
      this.setState({ officialWebsiteValue: "" })
    }
  }

  // 失焦企业官网
  blurOfficialWebsite() {
    if (this.state.officialWebsiteValue === "") {
      this.setState({ officialWebsiteValue: "请输入企业官方网址" })
    }
  }

  // 输入企业官网
  changeOfficialWebsite(event) {
    this.setState({ officialWebsiteValue: event.target.value })
  }

  // 聚焦企业描述
  focusDescription() {
    if (this.state.descriptionValue === "400字内") {
      this.setState({ descriptionValue: "" })
    }
  }

  // 失焦企业描述
  blurDescription() {
    if (this.state.descriptionValue === "") {
      this.setState({ descriptionValue: "400字内" })
    }
  }

  // 输入企业描述
  changeDescription(event) {
    this.setState({ descriptionValue: event.target.value })
  }

  // 修改logoimg
  onChangeLogo = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      filesLogo: files,
      files,
    });
    
    if (files.length == 0) {
      //不更新logoimg
      this.setState({
        update_headimgurl:"",
      });
    } else {
      //oss logoimg
      this.dataService.uploadImgOss(this.setLogoImg, this.state.filesLogo[0].url);
    }

  }

  // 修改提交logoimg数据
  setLogoImg(data) {
    this.setState({
      update_headimgurl: data.img_url,
    })
  }


  //企业风采
  public onChangeElegant= (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      filesElegant: files,
      files,
    }, () => {
      let elegantArr = [];
      if (this.state.filesElegant.length > 0) {
        $.each(this.state.filesElegant, function (index, item) {
          if (item.url.indexOf("base64") != -1) {
            elegantArr.push({ "imgname": "", "imgbase64": item.url });
          }
        });
      }
      //oss url
      this.dataService.uploadImgOss(this.setElegantImg, elegantArr);
      });
  }

  // 获取ossurl，写入state
  setElegantImg(data) {
    let filesElegants = this.state.filesElegant;
    let filesElegantsN = filesElegants.filter((item) => { return item.orientation != "1" })
    $.each(data, function (index, item) {
      filesElegantsN.push({ "url": item, "id": "", "name": ""} )
    });
    this.setState({
      elegant: filesElegantsN
    })

    console.log(this.state.elegant);
  }

  //企业产品
  public onChangeProduct= (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      filesProduct: files,
      files,
    }, () => {
      let productArr = [];
      if (this.state.filesProduct.length > 0) {
        $.each(this.state.filesProduct, function (index, item) {
          if (item.url.indexOf("base64") != -1) {
            productArr.push({ "imgname": "", "imgbase64": item.url });
          }
        });
      }
      //oss url
      this.dataService.uploadImgOss(this.setProductImg, productArr);
    });
  }

  // 获取ossurl，写入state
  setProductImg(data) {
    let filesProducts = this.state.filesProduct;
    let filesProductsN = filesProducts.filter((item) => { return item.orientation != "1" })
    $.each(data, function (index, item) {
      filesProductsN.push({ "url": item, "id": "", "name": "" })
    });
    this.setState({
      product: filesProductsN
    })
  }

  //全景
  public onChangePanorama= (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      filesPanorama: files,
      files,
    }, () => {
      let panoramaArr = [];
      if (this.state.filesPanorama.length > 0) {
        $.each(this.state.filesPanorama, function (index, item) {
          if (item.url.indexOf("base64") != -1) {
            panoramaArr.push({ "imgname": "", "imgbase64": item.url });
          }
        });
      }
      //oss url
      this.dataService.uploadImgOss(this.setPanoramaImg, panoramaArr);
    });
  }

  // 获取ossurl，写入state
  setPanoramaImg(data) {
    let filesPanoramas = this.state.filesPanorama;
    let filesPanoramasN = filesPanoramas.filter((item) => { return item.orientation != "1" })
    $.each(data, function (index, item) {
      filesPanoramasN.push({ "url": item, "id": "", "name": "" })
    });
    this.setState({
      panorama: filesPanoramasN
    })
  }

  render() {
 
    const { files } = this.state;
    return (
      <div className="enterprise-information">
        <div className="enterprise-information-back">
          <div style={{ float: "left" }} onClick={this.goBack.bind(this)}>
            <img src="./park_m/image/back.png" style={{ margin: "-10px 10px 0 0" }} />
            <span>企业信息管理</span>
          </div>
          {this.state.modifyState ? null :
            <span style={{ float: "right", marginRight: "50px", color: "#0B8BF0" }} onClick={this.modify.bind(this)}>修改</span>
          }
        </div>
        {this.state.modifyState ?
          <div>
            <div className="enterprise-information-id">
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", marginLeft: "30px", float: "left", width: "25%" }}>企业ID</div>
              <input className="enterprise-information-id-input" value={this.state.inputEnterpriseIDValue} />
            </div>
            <div className="enterprise-information-modify-tag">
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" }}>企业名称</div>
              <input className="enterprise-information-name-input" value={this.state.inputEnterpriseNameValue}
                onFocus={this.focusEnterpriseName.bind(this)} onBlur={this.blurEnterpriseName.bind(this)} onChange={this.changeEnterpriseName.bind(this)} />
            </div>
            <div className="" style={{ height: "160px", width: "90%", margin: "auto", "marginTop": "1rem", borderBottom: "3px solid #F2F2F2"}}>
              <span className="enterprise-information-photograph-star"></span>
              <span style={{ color: "#949494", fontSize: "40px", lineHeight: "160px", float: "left"}}>企业 logo</span>
              <div className="" style={{ "marginLeft": "14rem" }}>
                <WingBlank>
                  <ImagePicker
                    files={this.state.filesLogo}
                    onChange={this.onChangeLogo}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 1}
                    multiple={this.state.multiple}
                  />
                </WingBlank>
              </div>
            </div>

            <div className="enterprise-information-modify-tag">
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" }}>企业位置</div>
              <input className="enterprise-information-name-input" value={this.state.inputEnterprisePositionValue}
                onFocus={this.focusEnterprisePosition.bind(this)} onBlur={this.blurEnterprisePosition.bind(this)} onChange={this.changeEnterprisePosition.bind(this)} />
            </div>
            <div className="enterprise-information-modify-tag">
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" }}>联系人</div>
              <input className="enterprise-information-name-input" value={this.state.contactsValue}
                onFocus={this.focusContacts.bind(this)} onBlur={this.blurContacts.bind(this)} onChange={this.changeContacts.bind(this)} />
            </div>
            <div className="enterprise-information-modify-tag">
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" }}>联系电话</div>
              <input className="enterprise-information-name-input" value={this.state.phoneValue} type="Number"
                onFocus={this.focusPhone.bind(this)} onBlur={this.blurPhone.bind(this)} onChange={this.changePhone.bind(this)} />
            </div>
            <div className="enterprise-information-modify-tag" onClick={this.showCompanyTypeBox.bind(this)} >
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" }}>企业分类</div>
              <div style={{ color: "#6C6C6C", fontSize: "40px", lineHeight: "120px", width: "50%", float: "left" }}>{this.state.inputCompanyType}</div>
              <div style={{ float: "right", lineHeight: "120px", textAlign: "center", width: "60px" }}>
                <img src="./park_m/image/right.png" />
              </div>
            </div>
            <div className="enterprise-information-modify-tag">
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%", marginLeft: "30px" }}>企业官网</div>
              <input className="enterprise-information-name-input" value={this.state.officialWebsiteValue}
                onFocus={this.focusOfficialWebsite.bind(this)} onBlur={this.blurOfficialWebsite.bind(this)} onChange={this.changeOfficialWebsite.bind(this)} />
            </div>
            <div style={{ width: "90%", height: "120px", margin: "auto", marginTop: "10px" }}>
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "35%" }}>企业详情描述:</div>
            </div>
            <textarea style={{ width: "84%", height: "400px", backgroundColor: "#F2F2F2", fontSize: "40px", color: "#949494", border: "none", outline: "none" }} value={this.state.descriptionValue}
              onFocus={this.focusDescription.bind(this)} onBlur={this.blurDescription.bind(this)} onChange={this.changeDescription.bind(this)}></textarea>
           
            <div className="" style={{ margin: "1rem auto auto", width: "90%", borderBottom: "3px solid #F2F2F2"}}>
              <span style={{ color: "#949494", fontSize: "40px", lineHeight: "160px", float: "left" }}>企业风采</span>
              <div style={{ marginLeft: "11rem"}}>
                <WingBlank>
                  <ImagePicker
                    files={this.state.filesElegant}
                    onChange={this.onChangeElegant}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 8}
                    multiple={this.state.multiple}
                  />
                </WingBlank>
              </div>
            </div>

            <div className="" style={{ margin: "1rem auto auto", width: "90%", borderBottom: "3px solid #F2F2F2" }}>
              <span style={{ color: "#949494", fontSize: "40px", lineHeight: "160px", float: "left" }}>产品展示</span>
              <div style={{ marginLeft: "11rem" }}>
                <WingBlank>
                  <ImagePicker
                    files={this.state.filesProduct}
                    onChange={this.onChangeProduct}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 8}
                    multiple={this.state.multiple}
                  />
                </WingBlank>
              </div>
            </div>

            <div className="" style={{ margin: "1rem auto auto", width: "90%", borderBottom: "3px solid #F2F2F2", marginBottom: "13rem"}}>
              <span style={{ color: "#949494", fontSize: "40px", lineHeight: "160px", float: "left" }}>全景展示</span>
              <div style={{ marginLeft: "11rem" }}>
                <WingBlank>
                  <ImagePicker
                    files={this.state.filesPanorama}
                    onChange={this.onChangePanorama}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 8}
                    multiple={this.state.multiple}
                  />
                </WingBlank>
              </div>
            </div>
 
            <div className="enterprise-information-submit" onClick={this.submit.bind(this)}>
              提交
            </div>
          </div> :
          <div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>企业ID</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>{this.state.ID}</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>企业名称</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>{this.state.name}</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>企业logo</div>
              <div style={{ color: "#333333", fontSize: "40px", float: "left" }}>
                <img src={this.state.headimageurl} style={{ width: "11rem" }} onError={this.onErrorHeadimageurl.bind(this)}/>
              </div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>企业位置</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>{this.state.address}</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>联系人</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>{this.state.Contacts}</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>联系电话</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>{this.state.phone}</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>企业分类</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>{this.state.company_type}</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>企业官网</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>{this.state.website}</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>企业介绍</div>
              <div style={{ color: "#333333", fontSize: "40px", float: "left", width: "70%" }}>{this.state.descript}</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>企业风采</div>
              <div style={{ color: "#333333", fontSize: "40px", float: "left", width: "70%" }}>
                {
                  this.state.elegantImgList.map((item, index) => {
                    return (
                      <div key={index} style={{ float: "left", width: "30%", height: "30%", margin: "0 20px 20px 0" }}>
                        <img src={item.pic_url} width="100%" height="100%" onError={this.onErrorElegant.bind(this)} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>产品展示</div>
              <div style={{ color: "#333333", fontSize: "40px", float: "left", width: "70%" }}>
                {
                  this.state.productImgList.map((item, index) => {
                    return (
                      <div key={index} style={{ float: "left", width: "30%", height: "30%", margin: "0 20px 20px 0" }}>
                        <img src={item} width="100%" height="100%" onError={this.onErrorProduct.bind(this)} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>全景展示</div>
              <div style={{ color: "#333333", fontSize: "40px", float: "left", width: "70%" }}>
                {
                  this.state.panoramaImgList.map((item, index) => {
                    return (
                      <div key={index} style={{ float: "left", width: "30%", height: "30%", margin: "0 20px 20px 0" }}>
                        <img src={item} width="100%" height="100%" onError={this.onErrorPanorama.bind(this)} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        }

        <div className={this.state.companyTypeBox}>
          <ul className="rollSelectCauseULcss">
            {this.state.companyTypeUL.map((i, index) => {
              return (
                <li className={this.state.companyTypeIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli"}
                  onClick={this.inCompanyeTypeList.bind(this, index, i.id, i.name)}
                >{i.name}</li>
              )
            })}
          </ul>
          <div className="rollSelectCuasedBtn">
            <span className="rollSelectCancel" onClick={this.hideCompanyTypeBox.bind(this)} >取消</span>
            <span className="rollSelectConfirm" onClick={this.getCompanyTypeBox.bind(this)}>确认</span>
          </div>
        </div>

      </div>
    )
  }
}

export default EnterpriseInformation;