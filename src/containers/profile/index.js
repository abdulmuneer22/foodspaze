import React, { Component } from "react";
import { Text, View, Image, Modal } from "react-native";
import Theme from "../../styles";
import Header from "../../components/Header";
import { Fonts, Colors } from "../../Constants";
import BookTable from "./bookTable";
import Tags from "../../components/Tags";
import MenuList from "./MenuList";
import ModalContent from "./modalContent";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cusine: "All",
      showmodal: false,
      dishList: []
    };
  }
  changeCusine = type => {
    const { menu_list } = this.props.navigation.state.params;

    this.setState({
      cusine: type
    });

    if (type === "All") {
      this.setState({
        dishList: [...menu_list[0]["Veg"], ...menu_list[0]["nonVeg"]]
      });
    }

    if (type === "VEG") {
      this.setState({
        dishList: menu_list[0]["Veg"]
      });
    }

    if (type === "Non-VEG") {
      this.setState({
        dishList: menu_list[0]["nonVeg"]
      });
    }
  };

  componentWillMount() {
    const { menu_list } = this.props.navigation.state.params;

    if (menu_list && menu_list[0]) {
      var veg = menu_list[0]["Veg"] || [];
      var nVeg = menu_list[0]["nonVeg"] || [];
      this.setState({
        dishList: [...veg, ...nVeg]
      });
    }
  }

  render() {
    const {
      name,
      image_url,
      contact,
      distance
    } = this.props.navigation.state.params;
    const { cusine, dishList } = this.state;

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <Header navigation={this.props.navigation} />

        {dishList && dishList.length > 0 ? (
          <Tags cusine={cusine} onChange={this.changeCusine} />
        ) : null}

        <Text
          style={{
            fontFamily: Fonts.LABEL,
            color: Colors.PURE_ORANGE,
            marginTop: 15
          }}
        >
          {name}
        </Text>

        <Image
          style={{
            width: "98%",
            height: 200,
            borderRadius: 16,
            paddingHorizontal: "1%",
            marginVertical: 20,
            paddingLeft: 20
          }}
          source={{ uri: image_url }}
          defaultSource={require("../../../assets/images/default_res.jpg")}
        />
        <BookTable
          onPress={() =>
            this.setState({
              showmodal: true
            })
          }
        />

        <MenuList list={dishList} />

        <Modal
          visible={this.state.showmodal}
          transparent={true}
          onDismiss={() =>
            this.setState({
              showmodal: false
            })
          }
        >
          <ModalContent
            onClose={() =>
              this.setState({
                showmodal: false
              })
            }
          />
        </Modal>
      </View>
    );
  }
}

export default Profile;
