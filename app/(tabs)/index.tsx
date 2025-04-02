import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import VideoEditorPlugin, {
  FeaturesConfigBuilder,
  VideoResolution,
  Watermark,
  WatermarkAlignment,
} from 'video-editor-react-native';

const LICENSE_TOKEN = SET YOUR LICENSE TOKEN;

export default function HomeScreen() {
  const [errorText, setErrorText] = useState('');

  const featuresConfig = new FeaturesConfigBuilder().build();

  const handleVideoExport = (response: any) => {
    console.log('Export completed:', response);
  };

  const handleSdkError = (e: any) => {
    console.log('SDK Error:', e.code);

    let message = '';
    switch (e.code) {
      case 'ERR_SDK_NOT_INITIALIZED':
        message = 'Failed to initialize SDK. Check the license token.';
        break;
      case 'ERR_SDK_LICENSE_REVOKED':
        message = 'License token expired or revoked. Contact Banuba.';
        break;
      case 'ERR_MISSING_EXPORT_RESULT':
        message = 'Export result is missing. Try again.';
        break;
      case 'ERR_MISSING_HOST':
        message = 'Missing host Activity to start video editor.';
        break;
      case 'ERR_VIDEO_EXPORT_CANCEL':
        message = 'User canceled video editing.';
        break;
      case 'ERR_INVALID_PARAMS':
        message = e.message;
        break;
      default:
        console.log('Banuba SDK error:', e);
        break;
    }
    setErrorText(message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          Sample integration of Banuba Video Editor in Expo
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const videoEditor = new VideoEditorPlugin();
            videoEditor.openFromCamera(LICENSE_TOKEN, featuresConfig)
              .then(handleVideoExport)
              .catch(handleSdkError);
          }}>
          <Text style={styles.buttonText}>Open Video Editor - Default</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsWrapper: {
    width: '100%',
    maxWidth: 300,
  },
  errorText: {
    color: '#ff0000',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});