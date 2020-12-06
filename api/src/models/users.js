const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
    {
    userName: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
    approver: {
        type: Boolean,
        required: true
    },
    requestor: {
        type: Boolean,
        required: true
    },
    payment: {
        accountNo: {
            type: String
        }
    }
}
)



// userSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
// userSchema.pre('save', function(next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// userSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// userSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// userSchema.pre('find', function(next) {
// userSchema.pre(/^find/, function(next) {
//   this.find({ secretTour: { $ne: true } });

//   this.start = Date.now();
//   next();
// });

// userSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// AGGREGATION MIDDLEWARE
// userSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema)

module.exports = User