export const getPrompt = (musicType, name, direction) => {
    return `
    Wish a happy birthday to ${name}. Ensure that "Happy birthday" is mentioned at
    least twice in the lyrics, and it should rhyme. The lyrics should use simple, short,
    and easy-to-pronounce words as much as possible. Using the above information, please
    write 16 lines of ${musicType} lyrics that I can dedicate to him for ${direction} birthday. Each line 
    can have a maximum of 8 words or 40 characters.
    The lyrics generated should be completely unique and never written before every single
    time and should not in any way or manner infringe on any trademarks/copyrights or any other
    rights of any individual or entity anywhere in the world. Any references or similarity to
    existing lyrics of any song anywhere in the world needs to be completely avoided.
    Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned
    above needs to be completely avoided. The lyrics generated should not be insensitive or should
    not offend any person/place/caste/religion/creed/tribe/country/gender/government/
    organization, or any entity or individual in any manner whatsoever. Any words which might be
    construed directly or indirectly as cuss words or are offensive in any language should also be
    completely avoided.
    `;
};
