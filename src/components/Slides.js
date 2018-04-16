import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../assets/images/wallpaper_1.jpg');

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title='ONWARDS !'
          activeOpacity={1}
          underlayColor="transparent"
          onPress={this.props.onComplete}
          buttonStyle={{ height: 50, width: 250, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'white', borderRadius: 30 }}
          containerStyle={{ marginVertical: 20 }}
          titleStyle={{ fontWeight: 'bold', color: 'white' }}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <ImageBackground
          key={slide.text}
          source={BG_IMAGE}
          style={styles.bgImage}
        >
          <View style={styles.slideStyle}>
            <View style={styles.slideTitle}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.slideText}>{slide.text}</Text>
              </View>
              {this.renderLastSlide(index)}
            </View>
          </View>
        </ImageBackground>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    marginTop: 150,
    backgroundColor: 'transparent',
    width: 250,
    height: 400,
  },
  slideTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'bold'
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export default Slides;
