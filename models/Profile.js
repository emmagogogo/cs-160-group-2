const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  firstName: {
    type: String,
    default:'',
    required: true
  },
  lastName: {
    type: String,
    default:'',
    required: true
  },
  email: {
    type: String,
    default:'',
    required: true
  },

  phoneNumber: {
    type: String,
    default:'',
    required: true
  },

  company: {
    type: String,
    default:''
  },
  website: {
    type: String,
    default:''
  },
  location: {
    type: String,
    default:''
  },
  status: {
    type: String,
    default:'',
    required: true
  },
  skills: {
    type: [String],
    default:'',
    required: true
  },
  bio: {
    type: String,
    default:''
  },
  githubusername: {
    type: String,
    default:''
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  },
  applications : {
    type : [],
  },
  profileImg:
  {
      data: Buffer,
      contentType: String
  }
  
});

module.exports = mongoose.model('profile', ProfileSchema);
