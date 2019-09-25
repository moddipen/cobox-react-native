import React from 'react';
import {
    View,
    Text,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import styles from "./StylesJs/styles";
import {Appbar} from 'react-native-paper';
import CardView from 'react-native-cardview'
import {CheckBox} from 'react-native-elements'

class App extends React.Component {

    state = {
        items: [],
        newitems: [],
        showProgress: true,
        checkAll: true,
        checktypezero: true,
        checktypeone: true,
        checktypetwo: true,
        checktypethree: true,
        checktypefour: true,
    }

    filterAll = async () => {
        if (this.state.checkAll) {
            await this.setState({
                checktypezero: true,
                checktypeone: true,
                checktypetwo: true,
                checktypethree: true,
                checktypefour: true,
            })
            await this.filterUserData()
        } else {
            await this.setState({
                checktypezero: false,
                checktypeone: false,
                checktypetwo: false,
                checktypethree: false,
                checktypefour: false,
            })

            await this.filterUserData()

        }
    }

    filterUserData = async () => {
        let array = [];
        if (this.state.checkAll) {
            let all = this.state.items;
            await this.setState({
                newitems: all
            })
        } else {
            let zero = await this.state.items.filter(data => {
                if (this.state.checktypezero && data.type == 0) {
                    return true
                }
                if (this.state.checktypeone && data.type == 1) {
                    return true
                }
                if (this.state.checktypetwo && data.type == 2) {
                    return true
                }
                if (this.state.checktypethree && data.type == 3) {
                    return true
                }
                if (this.state.checktypefour && data.type == 4) {
                    return true
                }
            });
            this.setState({
                newitems: zero
            })
        }
        console.log(this.state.newitems)
    }

    componentDidMount() {
        fetch('http://www.mocky.io/v2/5d889c8a3300002c0ed7da42')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    items: responseJson.items,
                    newitems: responseJson.items,
                    showProgress: false
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        let items = this.state.newitems.map((item, index) => {
            let color = ''
            if (item.type == 0) {
                color = TYPE_COLORS["0"]
            } else if (item.type == 1) {
                color = TYPE_COLORS["1"]
            } else if (item.type == 2) {
                color = TYPE_COLORS["2"]
            } else if (item.type == 3) {
                color = TYPE_COLORS["3"]
            } else if (item.type == 4) {
                color = TYPE_COLORS["4"]
            } else {
                color = ''
            }
            return (
                <CardView
                    key={index}
                    cardElevation={3}
                    cardMaxElevation={5}
                    cornerRadius={5}
                    padding={10}
                    margin={10}>

                    <View style={{flexDirection: 'row'}}>

                        <View style={{backgroundColor: `${color}`, width: 13, height: 150}}/>

                        <View style={{marginLeft: 20, marginTop: 5}}>
                            <Text style={{fontSize: 18}}>{item.fullName}</Text>
                            <Text style={{marginTop: 5}}>{item.email}</Text>

                            <View style={{
                                flexDirection: 'row',
                                marginTop: 25,
                                paddingLeft: 30,
                            }}>

                                <View>
                                    <View style={styles.viewround}>
                                        <Text style={styles.viewroundtextstyle}>1</Text>
                                    </View>
                                    <Text style={styles.textwallet}>{item.wallet1}</Text>
                                </View>

                                <View style={{marginLeft: 30, marginRight: 30}}>
                                    <View style={styles.viewround}>
                                        <Text style={styles.viewroundtextstyle}>2</Text>
                                    </View>
                                    <Text style={styles.textwallet}>{item.wallet2}</Text>
                                </View>

                                <View>
                                    <View style={styles.viewround}>
                                        <Text style={styles.viewroundtextstyle}>3</Text>
                                    </View>
                                    <Text style={styles.textwallet}>{item.wallet3}</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                </CardView>
            )
        })

        return (

            <View style={styles.container}>
                <Appbar.Header style={{backgroundColor: 'black'}}>
                    <Appbar.Content
                        title="CBOX USER"
                        alignItems='center'
                    />
                </Appbar.Header>

                <ScrollView horizontal={true}>
                    <View style={{flexDirection: 'row'}}>
                        <CheckBox
                            containerStyle={styles.checkboxst}
                            title='All'
                            checked={this.state.checkAll}
                            onPress={() => this.setState({
                                checkAll: !this.state.checkAll
                            }, this.filterAll)}
                        />
                        <CheckBox
                            containerStyle={styles.checkboxst}
                            title='Type 0'
                            checked={this.state.checktypezero}
                            onPress={() => this.setState({
                                checktypezero: !this.state.checktypezero,
                                checkAll: false
                            }, this.filterUserData)}
                        />
                        <CheckBox
                            containerStyle={styles.checkboxst}
                            title='Type 1'
                            checked={this.state.checktypeone}
                            onPress={() => this.setState({
                                checktypeone: !this.state.checktypeone,
                                checkAll: false
                            }, this.filterUserData)}
                        />

                        <CheckBox
                            containerStyle={styles.checkboxst}
                            title='Type 2'
                            checked={this.state.checktypetwo}
                            onPress={() => this.setState({
                                checktypetwo: !this.state.checktypetwo,
                                checkAll: false
                            }, this.filterUserData)}
                        />

                        <CheckBox
                            containerStyle={styles.checkboxst}
                            title='Type 3'
                            checked={this.state.checktypethree}
                            onPress={() => this.setState({
                                checktypethree: !this.state.checktypethree,
                                checkAll: false
                            }, this.filterUserData)}
                        />

                        <CheckBox
                            containerStyle={styles.checkboxst}
                            title='Type 4'
                            checked={this.state.checktypefour}
                            onPress={() => this.setState({
                                checktypefour: !this.state.checktypefour,
                                checkAll: false
                            }, this.filterUserData)}
                        />
                    </View>

                </ScrollView>

                <ActivityIndicator animating={this.state.showProgress} color="#0000ff" size="large"
                                   style={{justifyContent: 'center', flex: 10}}/>

                <ScrollView>
                    {items}
                </ScrollView>

            </View>
        );
    }
}

const TYPE_COLORS = {
    "0": "#48BEFF",
    "1": "#3DFAFF",
    "2": "#43C59E",
    "3": "#3D7068",
    "4": "#14453D",
};
export default App;
