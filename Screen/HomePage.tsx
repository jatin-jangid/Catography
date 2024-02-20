import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import GifImage from '@lowkey/react-native-gif';

const HomePage = () => {
  const mobileW = Dimensions.get('window').width;
  const mobileH = Dimensions.get('window').height;
  const [catImage, setCatImage] = useState<any>(null);
  const [catImageSayingHello, setCatImageSayingHello] = useState<any>(null);
  const [CatGIF, setCatGIF] = useState<any>(null);
  const fetchRandomCat = async () => {
    try {
      const timestamp = new Date().getTime(); // Unique timestamp
      const response = await fetch(
        `https://cataas.com/cat?timestamp=${timestamp}`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      //@ts-ignore
      setCatImage(response.url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };
  const fetchRandomCatSayingHello = async () => {
    try {
      const timestamp = new Date().getTime(); // Unique timestamp
      const response = await fetch(
        `https://cataas.com/cat/says/hello?timestamp=${timestamp}`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      //@ts-ignore
      setCatImageSayingHello(response.url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };
  const fetchRandomCatGIF = async () => {
    try {
      const timestamp = new Date().getTime(); // Unique timestamp
      const response = await fetch(
        `https://cataas.com/cat/gif?timestamp=${timestamp}`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      //@ts-ignore
      setCatGIF(response.url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            marginTop: 20,
            color: 'white',
            alignSelf: 'center',
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          Cat Finder
        </Text>
        <Image
          style={{
            marginTop: 10,
            width: 'auto',
            height: 200,
            resizeMode: 'contain',
          }}
          source={require('../Assets/Images/Kat.png')}
        />

        <TouchableOpacity style={styles.button} onPress={fetchRandomCat}>
          <Text style={styles.buttonText}>Find A Cat</Text>
        </TouchableOpacity>

        {catImage && (
          <Image
            style={{
              width: mobileW - 20,
              // width: 'auto',
              height: 400,
              //   margin: 20,
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
            }}
            source={{uri: catImage}}
          />
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={fetchRandomCatSayingHello}>
          <Text style={styles.buttonText}>Find A Cat Saying Hello</Text>
        </TouchableOpacity>

        {catImageSayingHello && (
          <Image
            style={{
              width: mobileW - 20,
              // width: 'auto',
              height: 400,
              //   margin: 20,
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
            }}
            source={{uri: catImageSayingHello}}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={fetchRandomCatGIF}>
          <Text style={styles.buttonText}>Find A Cat GIF</Text>
        </TouchableOpacity>

        {CatGIF && (
          // <Image
          //   style={{
          //     width: mobileW - 20,
          //     // width: 'auto',
          //     height: 400,
          //     //   margin: 20,
          //     alignSelf: 'center',
          //     marginTop: 10,
          //     marginBottom: 10,
          //     borderRadius: 10,
          //   }}
          //   source={{uri: CatGIF}}
          // />
          <GifImage
            source={{
              uri: CatGIF,
            }}
            style={{
              width: mobileW - 20,
              // width: 'auto',
              height: 400,
              //   margin: 20,
              alignSelf: 'center',
              marginTop: 10,
              marginBottom: 10,
              borderRadius: 10,
            }}
            resizeMode={'cover'}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#919191',
  },
  button: {
    backgroundColor: '#7f7f7f',
    // width: 150,
    width: 'auto',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default HomePage;
