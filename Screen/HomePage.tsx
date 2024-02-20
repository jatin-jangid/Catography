import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';

const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

const HomePage = () => {
  const [catImage, setCatImage] = useState<any>(null);
  const [catImageSayingHello, setCatImageSayingHello] = useState<any>(null);
  const [CatGIF, setCatGIF] = useState<any>(null);
  const [catSaying, setCatSaying] = useState<string>('Hello');
  useEffect(() => {
    fetchRandomCat();
    fetchRandomCatSayingHello();
    fetchRandomCatGIF();
  }, []);

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
        `https://cataas.com/cat/says/${catSaying}?timestamp=${timestamp}?fontSize=70&fontColor=red`,
        //https://cataas.com/cat/says/hello?fontSize=50&fontColor=white
        // 'https://cataas.com/cat/says/${catSaying}?fontSize=50&fontColor=red',
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
            color: '#001d4d',
            alignSelf: 'center',
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          Cat Finder
        </Text>
        <Image
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
          // resizeMode="contain"
          source={require('../Assets/Images/Kat.png')}
        />

        <View style={styles.catCard}>
          <TouchableOpacity style={styles.button} onPress={fetchRandomCat}>
            <Text style={styles.buttonText}>Random Catto</Text>
          </TouchableOpacity>

          {catImage && (
            <Image style={styles.imageCat} source={{uri: catImage}} />
          )}
        </View>

        <View style={styles.catCard}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              style={styles.buttonWithTextInput}
              onPress={fetchRandomCatSayingHello}>
              <Text style={styles.buttonText}>Find A Cat Saying </Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Eg. Hello"
              style={styles.textInput}
              value={catSaying}
              onChangeText={catSaying => {
                //@ts-ignore
                setCatSaying(catSaying);
              }}></TextInput>
          </View>

          {catImageSayingHello && (
            <Image
              style={styles.imageCat}
              source={{uri: catImageSayingHello}}
            />
          )}
        </View>

        <View style={styles.catCard}>
          <TouchableOpacity style={styles.button} onPress={fetchRandomCatGIF}>
            <Text style={styles.buttonText}>Find A Cat GIF</Text>
          </TouchableOpacity>

          {CatGIF && (
            <Image style={styles.imageCat} source={{uri: CatGIF}} />
            // <GifImage
            //   source={{
            //     uri: CatGIF,
            //   }}
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
            //   resizeMode={'cover'}
            // />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#919191',
    backgroundColor: '#c7dcff',
  },
  button: {
    backgroundColor: '#6da3fc',
    // width: 150,
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonWithTextInput: {
    backgroundColor: '#6da3fc',
    // width: 150,
    width: '50%',
    height: 58,
    // padding: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  imageCat: {
    // width: mobileW - 20,
    width: '95%',
    // width: 'auto',
    height: 400,
    //   margin: 20,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  catCard: {
    width: mobileW - 20,
    margin: 10,
    backgroundColor: '#a8c8ff',
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: '#6da3fc',
    width: 100,
    // height: 50,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    // borderRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default HomePage;
